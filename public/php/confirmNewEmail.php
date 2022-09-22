<?php
//Access: Everyone
//Purpose: Confirms the new email

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isset($_POST['number']) && isset($_POST['code'])) {
        $number = $_POST['number'];
        $code = $_POST['code'];
        $bin2hex = bin2hex(random_bytes(32));
        $randomLink = hash_hmac('sha256', 'randomLink string: confirmNewEmail.php', $bin2hex);
        $isConfirmAccount = 1;
        
        include 'connect.php';

        if(!preg_match(Numeric(), $number) || !preg_match(AlphaNumeric(), $code)) {
            echo json_encode(['status' => 'error', 'data' => 'Ο υπερσύνδεσμος είναι λάθος!']);
            die();
        } else {
            $query = $con->prepare("SELECT `confirmnewemail`.`email` FROM `confirmnewemail` WHERE `confirmnewemail`.`idUser` = :idUser && `confirmnewemail`.`token` = :token");

            $query->bindValue(":idUser", $number);
            $query->bindValue(":token", $code);

            if($query->execute()) {
                $row = $query->fetch(PDO::FETCH_ASSOC);

                if(!empty($row)) {
                    $query2 = $con->prepare("UPDATE users SET email = :email WHERE id = :id");

                    $query2->bindValue(':email', $row['email']);
                    $query2->bindValue(':id', $number);

                    if($query2->execute()) { 
                        $query3 = $con->prepare("DELETE FROM `confirmnewemail` WHERE `confirmnewemail`.`idUser` = :idUser");

                        $query3->bindValue(':idUser', $number);
        
                        if($query3->execute()) { 
                            echo json_encode(['status' => 'ok', 'data' => 'Το Email σας ταυτοποιήθηκε επιτυχώς!']);
                        } else {
                            echo json_encode(['status' => 'error', 'data' => 'Σφάλμα: Κάτι πήγε λάθος!']);
                        }
                        die();
                    } else {
                        echo json_encode(['status' => 'error', 'data' => 'Σφάλμα: Κάτι πήγε λάθος! Το Email σας δεν ταυτοποιήθηκε!']);
                    }
                    die();
                } else {
                    echo json_encode(['status' => 'error', 'data' => 'Ο υπερσύνδεσμος είναι λάθος!']);
                }
                die();
            } else {
                echo json_encode(['status' => 'error', 'data' => 'Σφάλμα: Κάτι πήγε λάθος!']);
            }
            die();
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => 'Ο υπερσύνδεσμος είναι λάθος!']);
    }
    die();
?>