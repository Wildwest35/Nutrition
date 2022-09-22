<?php
//Access: Everyone
//Purpose: Activate account admin

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isset($_SESSION['username']) && isset($_POST['id'])) {
        $usernameId = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
        $id = $_POST['id'];
        $isConfirmAccount = 1;        
        
        include 'connect.php';

        if(!preg_match(Numeric(), $id) || !preg_match(Numeric(), $usernameId)) {
            echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
        } else {
            $query = $con->prepare("SELECT `activationlink`.`idUser` FROM `activationlink` WHERE `activationlink`.`id` = :id");

            $query->bindValue(":id", $id);

            if($query->execute()) {
                $row = $query->fetch(PDO::FETCH_ASSOC);
                if(!empty($row)) {
                    $query1 = $con->prepare("UPDATE `users` SET `users`.`isConfirmAccount` = :isConfirmAccount WHERE `users`.`id` = :id");

                    $query1->bindValue(":isConfirmAccount", $isConfirmAccount);
                    $query1->bindValue(":id", $row['idUser']);
                
                    if($query1->execute()) {
                        $query3 = $con->prepare("DELETE FROM `activationlink` WHERE `activationlink`.`id` = :id");
                
                        $query3->bindValue(':id', $id);
        
                        if($query3->execute()) {
                            echo json_encode(['status' => 'ok', 'data' => true]);
                        } else {
                            echo json_encode(['status' => 'error', 'data' => false]);
                        }
                        die();
                    } else {
                        echo json_encode(['status' => 'error', 'data' => false]);
                    }
                    die();
                } else {
                    echo json_encode(['status' => 'error', 'data' => false]);
                }
                die();
            } else {
                echo json_encode(['status' => 'error', 'data' => false]);
            }
            die();
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>