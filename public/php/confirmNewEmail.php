<?php
//Access: Everyone
//Purpose: Check if the url is valid and confirms the new email

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isset($_POST['lang'])) {
        $lang = $_POST['lang'];
        if($lang == 'gr') {
            $emailMatched = 'Το Email σας ταυτοποιήθηκε επιτυχώς!';
            $linkError = 'Ο υπερσύνδεσμος είναι λάθος!';
            $errorEmailNotMatched = 'Σφάλμα: Κάτι πήγε λάθος! Το Email σας δεν ταυτοποιήθηκε!';
            $error = 'Σφάλμα: Κάτι πήγε λάθος!';
        } else {
            $emailMatched = 'Your Email has been successfully identified!';
            $linkError = 'The hyperlink is wrong!';
            $errorEmailNotMatched = 'Error: Something went wrong! Your email was not identified!';
            $error = 'Error: Something went wrong!';
        }
    } else {
        $emailMatched = 'Το Email σας ταυτοποιήθηκε επιτυχώς!';
        $linkError = 'Ο υπερσύνδεσμος είναι λάθος!';
        $errorEmailNotMatched = 'Σφάλμα: Κάτι πήγε λάθος! Το Email σας δεν ταυτοποιήθηκε!';
        $error = 'Σφάλμα: Κάτι πήγε λάθος!';
    }

    if(isset($_POST['number']) && isset($_POST['code'])) {
        $number = $_POST['number'];
        $code = $_POST['code'];
        $bin2hex = bin2hex(random_bytes(32));
        $randomLink = hash_hmac('sha256', 'randomLink string: confirmNewEmail.php', $bin2hex);
        $isConfirmAccount = 1;
        
        include 'connect.php';

        if(!preg_match(Numeric(), $number) || !preg_match(AlphaNumeric(), $code)) {
            echo json_encode(['status' => 'error', 'data' => $linkError]);
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
                            echo json_encode(['status' => 'ok', 'data' => $emailMatched]);
                        } else {
                            echo json_encode(['status' => 'error', 'data' => $error]);
                        }
                        die();
                    } else {
                        echo json_encode(['status' => 'error', 'data' => $errorEmailNotMatched]);
                    }
                    die();
                } else {
                    echo json_encode(['status' => 'error', 'data' => $linkError]);
                }
                die();
            } else {
                echo json_encode(['status' => 'error', 'data' => $error]);
            }
            die();
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => $linkError]);
    }
    die();
?>