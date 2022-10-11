<?php
//Access: Authenticated Users
//Purpose: Update username

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['username']) && isset($_POST['newVal'])) {
            $newVal = filter_var($_POST['newVal'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            if($newVal == "") {
                echo json_encode(['status' => 'error', 'data' => '* Το πεδίο είναι κενό!']);
                die();
            } else {
                include 'connect.php';

                $username = filter_var($_POST['username'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
                if(isset($_SESSION['nameUser'])) {
                    $username = $_SESSION['nameUser'];
                }
                $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
                if(isset($_SESSION['idUser'])) {
                    $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
                }

                if(!preg_match(AlphaNumeric(), $username) || !preg_match(AlphaNumeric(), $newVal) || !preg_match(Numeric(), $id)) {
                    echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
                    die();
                } else {
                    $query = $con->prepare("SELECT `users`.`username` FROM `users` WHERE `users`.`username` = :username");

                    $query->bindValue(":username", $newVal);

                    if($query->execute()) {
                        $row = $query->fetch(PDO::FETCH_ASSOC);
                        if(!empty($row)) {
                            echo json_encode(['status' => 'error', 'data' => '* Αυτό το Username υπάρχει ήδη!']);
                        } else {
                            $query1 = $con->prepare("UPDATE `users` SET `users`.`username` = :username WHERE `users`.`username` = :newVal && `users`.`id` = :id");
                        
                            $query1->bindValue(':username', $newVal);
                            $query1->bindValue(':newVal', $username);
                            $query1->bindValue(":id", $id);

                            if($query1->execute()) {
                                $_SESSION['nameUser'] = $newVal;
                                echo json_encode(['status' => 'ok', 'data' => $newVal]);
                            } else {
                                echo json_encode(['status' => 'error', 'data' => '* Κάτι πήγε λάθος! Το Username δεν άλλαξε!']);                       
                            }                
                        }
                        die();
                    } else {
                        echo json_encode(['status' => 'error', 'data' => '* Κάτι πήγε λάθος! Το Username δεν άλλαξε!']);
                    }
                    die();
                }
                die();
            }    
        } else {
            echo json_encode(['status' => 'error', 'data' => '* Το πεδίο είναι κενό!']);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>