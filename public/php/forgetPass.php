<?php
//Access: Everyone
//Purpose: Send email for reseting password

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isset($_POST['lang'])) {
        $lang = $_POST['lang'];
        if($lang == 'gr') {
            $emailSent = 'Το Email σας στάλθηκε!';
            $emailNotExist = 'Δεν υπάρχει αυτό το Email!';
        } else {
            $emailSent = 'Your email has been sent!';
            $emailNotExist = 'This email doesn\'t exist!';
        }
    } else {
        $emailSent = 'Το Email σας στάλθηκε!';
        $emailNotExist = 'Δεν υπάρχει αυτό το Email!';
    }

    if(isset($_POST['email']) && isset($_POST['lang'])) {
        include 'connect.php';

        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $lang = filter_var($_POST['lang'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        if(!preg_match(Email(), $email)) {
            echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            die();
        } else {
            $query = $con->prepare("SELECT `users`.`id`, `users`.`token` FROM `users` WHERE `users`.`email` = :email");

            $query->bindValue(":email", $email);

            if($query->execute()) {
                $row = $query->fetch(PDO::FETCH_ASSOC);
                if(!empty($row)) {
                    $bin2hex = bin2hex(random_bytes(32));
                    $token = hash_hmac('sha256', 'this is a token', $bin2hex);

                    $query1 = $con->prepare("UPDATE `users` SET `users`.`token` = :token WHERE `users`.`email` = :email");

                    $query1->bindValue(':token', $token);
                    $query1->bindValue(':email', $email);

                    if($query1->execute()) {
                        $query2 = $con->prepare("SELECT `users`.`id`, `users`.`token` FROM `users` WHERE `users`.`email` = :email");

                        $query2->bindValue(":email", $email);
                
                        if($query2->execute()) {
                            $row2 = $query2->fetch(PDO::FETCH_ASSOC);
                            $to_email = $email;
                            $subject = "Nutrition: Reset Password";
                            $body = "Hi,\n Click the link below to reset your password \n https://zafora.ece.uowm.gr/~ece01121/Nutrition/public/resetpass.html?number=" . $row2['id'] . "&code=" . $row2['token'] . "lang=" . $lang;
                            $headers = "From: ece01121@zafora.ece.uowm.gr";//kostas.pe.97@gmail.com//ece01121@uowm.gr
/*                             $headers = "From: <ece01121@zafora.ece.uowm.gr>";
                            $headers .= "Reply-To: The Sender <ece01121@zafora.ece.uowm.gr>\r\n";
                            $headers .= "Return-Path: The Sender <ece01121@zafora.ece.uowm.gr>\r\n";                  
                            $headers .= "Organization: Nutrition\r\n";
                            $headers .= "MIME-Version: 1.0\r\n";
                            $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
                            $headers .= "X-Priority: 3\r\n";
                            $headers .= "X-Mailer: PHP". phpversion() ."\r\n";*/                   
                            
                            
                            if(mail($to_email, $subject, $body, $headers)) {
                                echo json_encode(["status" => 'ok', "data" => $emailSent]);
                            } else {
                                echo json_encode(["status" => 'error', "data" => false]);
                            }
                            die();                           
                        } else {
                            echo json_encode(['status' => 'error', 'data' => 'Error: update query']);
                        }
                        die();
                    } else {
                        echo json_encode(['status' => 'error', 'data' => 'Error: update query']);
                    }
                    die();
                } else {
                    echo json_encode(['status' => 'error', 'data' => $emailNotExist]);
                }
                die();
            } else {
                echo json_encode(['status' => 'error', 'data' => 'Error: select query']);
            }
            die();
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => $emailNotExist]);
    }
    die();
?>