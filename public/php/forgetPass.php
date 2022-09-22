<?php
//Access: Everyone
//Purpose: Send email for reseting password

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

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
                                echo json_encode(["status" => 'ok', "data" => 'Το Email σας στάλθηκε!']);
                            } else {
                                echo json_encode(["status" => 'error', "data" => false]);
                            }

/*                             // Start with PHPMailer class
                            use PHPMailer\PHPMailer\PHPMailer;
                            require_once './vendor/autoload.php';
                            // create a new object
                            $mail = new PHPMailer();
                            // configure an SMTP
                            $mail->isSMTP();
                            $mail->Host = 'smtp.gmail.com';
                            $mail->SMTPAuth = true;
                            $mail->Username = 'ece01121@zafora.ece.uowm.gr';
                            $mail->Password = '894912';
                            $mail->SMTPSecure = "tls";
                            $mail->Port = 2525;
                            
                            $mail->setFrom("ece01121@zafora.ece.uowm.gr", "Nutrition");
                            $mail->addAddress("kostas.pe.97@gmail.com", "Me");
                            $mail->Subject = 'Nutrition: Reset Password';
                            // Set HTML
                            $mail->isHTML(TRUE);
                            $mail->Body = "<html>Hi,<br> Click the link below to reset your password <br> https://zafora.ece.uowm.gr/~ece01121/Nutrition/public/resetpass.html?number=" . $row2['id'] . "&code=" . $row2['token'] . "lang=" . $lang . "</html>";
                            //$mail->AltBody = "Hi there, we are happy to confirm your booking. Please check the document in the attachment.";
                            // add attachment
                            //$mail->addAttachment("//confirmations/yourbooking.pdf", "yourbooking.pdf");
                            // send the message
                            if(!$mail->send()){
                                echo "Message could not be sent.";
                                echo "Mailer Error: " . $mail->ErrorInfo;
                            } else {
                                echo json_encode(["status" => 'ok', "data" => 'Το Email σας στάλθηκε!']);
                            } */

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
                    echo json_encode(['status' => 'error', 'data' => 'Δεν υπάρχει αυτό το Email!']);
                }
                die();
            } else {
                echo json_encode(['status' => 'error', 'data' => 'Error: select query']);
            }
            die();
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => 'email does not exist']);
    }
    die();
?>