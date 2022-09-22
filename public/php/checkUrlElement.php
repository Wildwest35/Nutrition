<?php
//Access: Everyone
//Purpose: Check if reset password url is valid to change it 

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isset($_POST['number']) && isset($_POST['code'])) {
        $number = filter_var($_POST['number'], FILTER_SANITIZE_NUMBER_INT);
        $code = filter_var($_POST['code'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);

        include 'connect.php';

        if(!preg_match(Numeric(), $number) || !preg_match(AlphaNumeric(), $code)) {
            echo json_encode(['status' => 'error', 'data' => 'Ο υπερσύνδεσμος είναι λάθος!']);
        } else {
            $query = $con->prepare("SELECT `users`.`username`, `users`.`token` FROM `users` WHERE `users`.`id` = :id && `users`.`token` = :token");

            $query->bindParam(':id', $number);
            $query->bindParam(':token', $code);

            if($query->execute()) {
                $row = $query->fetch(PDO::FETCH_ASSOC);
                if(!empty($row)) {
                    echo json_encode(['status' => 'ok', 'data' => true]);
                } else {
                    echo json_encode(['status' => 'error', 'data' => 'Ο υπερσύνδεσμος έχει λείξει!']);
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