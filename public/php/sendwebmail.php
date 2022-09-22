<?php
//Access: Everyone
//Purpose: Register a new user

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])) { 

        $name = filter_var($_POST['name'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $subject = filter_var($_POST['subject'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $message = filter_var($_POST['message'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        //$myEmail = "ece01121@zafora.ece.uowm.gr";
        $myEmail = "kostas-pe-97@hotmail.com";

/*         if(!preg_match(AlphaNumeric(), $username) || !preg_match(Email(), $email) || !preg_match(Numeric(), $sex) || !preg_match(Numeric(), $age)) {
            echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            die();
        } else { */
            $to_email = $myEmail;
            $subject = $subject;
            $body = $message;
            $headers = 'From: ' . $email;
            
            if(mail($to_email, $subject, $body, $headers)) {
                echo json_encode(["status" => 'ok', "data" => true]);
            } else {
                echo json_encode(["status" => 'error', "data" => false]);
            }
            die();
/*         }
        die(); */
    } else {
        echo json_encode(["status" => 'error', "data" => false]);
    }
    die();
?>