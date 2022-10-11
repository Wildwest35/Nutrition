<?php
//Access: Authenticated Users
//Purpose: Update password

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['username']) && isset($_POST['newVal1']) && isset($_POST['newVal2'])) {
            $newVal1 = $_POST['newVal1'];
            $newVal2 = $_POST['newVal2'];
            if($newVal1 == "" && $newVal2 == "") {
                echo json_encode(['status' => 'error', 'data' => '* Τα πεδία είναι κενά!']);
                die();
            } else {
                if($newVal1 !== $newVal2) {
                    echo json_encode(['status' => 'error', 'data' => '* Η "Επιβεβαίωση Συνθηματικού" δεν αντιστοιχεί με το "Συνθηματικό"!']);
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
                    $bin2hex = bin2hex(random_bytes(32));
                    $hash = hash_hmac('sha256', $newVal1, $bin2hex);

                    if(!preg_match(AlphaNumeric(), $username) || !preg_match(Numeric(), $id)) {
                        echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
                        die();
                    } else {
                        $query = $con->prepare("UPDATE `users` SET `users`.`pass` = :pass, `users`.`binToken` = :binToken WHERE `users`.`username` = :newVal && `users`.`id` = :id");
                    
                        $query->bindValue(':pass', $hash);
                        $query->bindValue(':binToken', $bin2hex);
                        $query->bindValue(':newVal', $username);
                        $query->bindValue(":id", $id);

                        if($query->execute()) {
                            echo json_encode(['status' => 'ok', 'data' => true]);
                        } else {
                            echo json_encode(['status' => 'error', 'data' => '* Κάτι πήγε λάθος! Το Συνθηματικό δεν άλλαξε!']);                       
                        }
                        die();
                    }
                    die();
                }    
            }
            die();   
        } else {
            echo json_encode(['status' => 'error', 'data' => '* Τα πεδία είναι κενά!']);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>