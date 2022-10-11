<?php
//Access: Everyone
//Purpose: Reset password if you want to log in but you don't remember it

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isset($_POST['lang'])) {
        $lang = $_POST['lang'];
        if($lang == 'gr') {
            $passChanged = 'Ο κωδικός πρόσβασής σας άλλαξε επιτυχώς!';
            $linkExpired = 'Ο υπερσύνδεσμος έχει λείξει!';
            $linkNotMatched = 'Τα συνθηματικά δεν συμπίπτουν!';
            $error = 'Σφάλμα: Κάτι πήγε λάθος!';
        } else {
            $passChanged = 'Your password has been successfully changed!';
            $linkExpired = 'The hyperlink has expired!';
            $linkNotMatched = 'Passwords do not match!';
            $error = 'Error: Something went wrong!';
        }
    } else {
        $passChanged = 'Ο κωδικός πρόσβασής σας άλλαξε επιτυχώς!';
        $linkExpired = 'Ο υπερσύνδεσμος έχει λείξει!';
        $linkNotMatched = 'Τα συνθηματικά δεν συμπίπτουν!';
        $error = 'Σφάλμα: Κάτι πήγε λάθος!';
    }

    if(isset($_POST['number']) && isset($_POST['code']) && isset($_POST['password']) && isset($_POST['repeatpassword'])) {
        $number = filter_var($_POST['number'], FILTER_SANITIZE_NUMBER_INT);
        $code = filter_var($_POST['code'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $pass = filter_var($_POST['password'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $repeatpassword = filter_var($_POST['repeatpassword'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $bin2hex = bin2hex(random_bytes(32));
        $token = hash_hmac('sha256', 'random token string: resetpass.php', $bin2hex);
        $hash = hash_hmac('sha256', $pass, $bin2hex);

        include 'connect.php';

        if($pass == $repeatpassword) {
            if(!preg_match(Numeric(), $number) || !preg_match(AlphaNumeric(), $code)) {
                echo json_encode(['status' => 'error', 'data' => 'Σφάλμα: Κάτι πήγε λάθος!']);
                die();
            } else {
                $query = $con->prepare("SELECT `users`.`token` FROM `users` WHERE `users`.`id` = :id && `users`.`token` = :token");

                $query->bindParam(':id', $number);
                $query->bindParam(':token', $code);
        
                if($query->execute()) {
                    $row = $query->fetch(PDO::FETCH_ASSOC);
                    if(!empty($row)) {
                        $query1 = $con->prepare("UPDATE `users` SET `users`.`pass` = :pass, `users`.`token` = :token, `users`.`binToken` = :binToken WHERE `users`.`id` = :id");
                
                        $query1->bindValue(':pass', $hash);
                        $query1->bindValue(':token', $token);
                        $query1->bindValue(':binToken', $bin2hex);
                        $query1->bindValue(':id', $number);
        
                        if($query1->execute()) {
                            echo json_encode(['status' => 'ok', 'data' => $passChanged]);
                        } else {
                            echo json_encode(['status' => 'error', 'data' => $error]);                       
                        }
                        die();
                    } else {
                        echo json_encode(['status' => 'error', 'data' => $linkExpired]);
                    }
                    die();
                } else {
                    echo json_encode(['status' => 'error', 'data' => $error]);
                }
                die();
            }
            die();
        } else {
            echo json_encode(['status' => 'error', 'data' => $linkNotMatched]);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => $error]);
    }
    die();
?>