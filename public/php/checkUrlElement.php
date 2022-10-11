<?php
//Access: Everyone
//Purpose: Check if reset password url is valid to change it 

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isset($_POST['lang'])) {
        $lang = $_POST['lang'];
        if($lang == 'gr') {
            $linkExpired = 'Ο υπερσύνδεσμος έχει λείξει!';
            $linkError = 'Ο υπερσύνδεσμος είναι λάθος!';
            $error = 'Σφάλμα: Κάτι πήγε λάθος!';
        } else {
            $linkExpired = 'The hyperlink has expired!';
            $linkError = 'The hyperlink is wrong!';
            $error = 'Error: Something went wrong!';
        }
    } else {
        $linkExpired = 'Ο υπερσύνδεσμος έχει λείξει!';
        $linkError = 'Ο υπερσύνδεσμος είναι λάθος!';
        $error = 'Σφάλμα: Κάτι πήγε λάθος!';
    }

    if(isset($_POST['number']) && isset($_POST['code'])) {
        $number = filter_var($_POST['number'], FILTER_SANITIZE_NUMBER_INT);
        $code = filter_var($_POST['code'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);

        include 'connect.php';

        if(!preg_match(Numeric(), $number) || !preg_match(AlphaNumeric(), $code)) {
            echo json_encode(['status' => 'error', 'data' => $linkError]);
        } else {
            $query = $con->prepare("SELECT `users`.`username`, `users`.`token` FROM `users` WHERE `users`.`id` = :id && `users`.`token` = :token");

            $query->bindParam(':id', $number);
            $query->bindParam(':token', $code);

            if($query->execute()) {
                $row = $query->fetch(PDO::FETCH_ASSOC);
                if(!empty($row)) {
                    echo json_encode(['status' => 'ok', 'data' => true]);
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
        echo json_encode(['status' => 'error', 'data' => $error]);
    }
    die();
?>