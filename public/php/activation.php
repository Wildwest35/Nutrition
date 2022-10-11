<?php
//Access: Everyone 
//Purpose: check if activation url is valid to activate user account

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isset($_POST['lang'])) {
        $lang = $_POST['lang'];
        if($lang == 'gr') {
            $successActivationAccount = 'Ο λογαριασμό σας ενεργοποιήθηκε επιτυχώς!';
            $accountAlraedyActivated = 'Ο λογαριασμό σας είναι ήδη ενεργοποιημένος!';
            $timeoutNewEmail = 'Ο χρόνος ενεργοποίησης του λογαριασμού σας έχει λήξει! Μόλις σας στείλαμε νέο Email για την ενεργοποίηση  του λογαριασμού σας!';
            $expireTimeNotSentEmail = 'Ο χρόνος ενεργοποίησης του λογαριασμού σας έχει λήξει! Κάτι πήγε λάθος με την επαναποστολή του email!';
            $passChanged = 'Ο κωδικός πρόσβασής σας άλλαξε επιτυχώς!';
            $linkExpired = 'Ο υπερσύνδεσμος έχει λείξει!';
            $linkNotMatched = 'Τα συνθηματικά δεν συμπίπτουν!';
            $linkError = 'Ο υπερσύνδεσμος είναι λάθος!';
            $errorNotActivated = 'Σφάλμα: Κάτι πήγε λάθος! Ο λογαριασμό σας δεν ενεργοποιήθηκε!';
            $error = 'Σφάλμα: Κάτι πήγε λάθος!';
        } else {
            $successActivationAccount = 'Your account has been successfully activated!';
            $accountAlraedyActivated = 'Your account is already activated!';
            $timeoutNewEmail = 'Your account activation time has expired! We just sent you a new Email to activate your account!';
            $expireTimeNotSentEmail = 'Your account activation time has expired! Something went wrong resending the email!';
            $passChanged = 'Your password has been successfully changed!';
            $linkExpired = 'The hyperlink has expired!';
            $linkNotMatched = 'Passwords don\'t match!';
            $linkError = 'The hyperlink is wrong!';
            $errorNotActivated = 'Error: Something went wrong! Your account hasn\'t been activated!';
            $error = 'Error: Something went wrong!';
        }
    } else {
        $successActivationAccount = 'Ο λογαριασμό σας ενεργοποιήθηκε επιτυχώς!';
        $accountAlraedyActivated = 'Ο λογαριασμό σας είναι ήδη ενεργοποιημένος!';
        $timeoutNewEmail = 'Ο χρόνος ενεργοποίησης του λογαριασμού σας έχει λήξει! Μόλις σας στείλαμε νέο Email για την ενεργοποίηση  του λογαριασμού σας!';
        $expireTimeNotSentEmail = 'Ο χρόνος ενεργοποίησης του λογαριασμού σας έχει λήξει! Κάτι πήγε λάθος με την επαναποστολή του email!';
        $passChanged = 'Ο κωδικός πρόσβασής σας άλλαξε επιτυχώς!';
        $linkExpired = 'Ο υπερσύνδεσμος έχει λείξει!';
        $linkNotMatched = 'Τα συνθηματικά δεν συμπίπτουν!';
        $linkError = 'Ο υπερσύνδεσμος είναι λάθος!';
        $errorNotActivated = 'Σφάλμα: Κάτι πήγε λάθος! Ο λογαριασμό σας δεν ενεργοποιήθηκε!';
        $error = 'Σφάλμα: Κάτι πήγε λάθος!';
    }

    if(isset($_POST['number']) && isset($_POST['code']) && isset($_POST['lang'])) {
        $number = $_POST['number'];
        $code = $_POST['code'];
        $lang = $_POST['lang'];
        date_default_timezone_set("Europe/Athens");
        $date = date("Y-m-d H:i:s");
        $expireLinkDate = date("Y-m-d H:i:s", strtotime('+2 hours'));
        $bin2hex = bin2hex(random_bytes(32));
        $randomLink = hash_hmac('sha256', 'randomLink string: activation.php', $bin2hex);
        $isConfirmAccount = 1;
        
        include 'connect.php';

        if(!preg_match(Numeric(), $number) || !preg_match(AlphaNumeric(), $code)) {
            echo json_encode(['status' => 'error', 'data' => $linkError]);
        } else {
            $query4 = $con->prepare("SELECT `users`.`isConfirmAccount`, `users`.`email`, `users`.`id` FROM `users` WHERE `users`.`id` = :id");

            $query4->bindValue(":id", $number);

            if($query4->execute()) {
                $row4 = $query4->fetch(PDO::FETCH_ASSOC);

                if(!empty($row4)) {
                    if($row4['isConfirmAccount'] != $isConfirmAccount) {
                        $query = $con->prepare("SELECT `activationlink`.`randomLink`, `activationlink`.`expireLinkDate` FROM `activationlink` WHERE `activationlink`.`idUser` = :idUser");

                        $query->bindValue(":idUser", $number);
                
                        if($query->execute()) {
                            $row = $query->fetch(PDO::FETCH_ASSOC);
                
                            if(!empty($row)) {
                                if($row['expireLinkDate'] > $date) {
                                    if($code == $row['randomLink']) {
                                        $query2 = $con->prepare("UPDATE `users` SET `users`.`isConfirmAccount` = :isConfirmAccount WHERE `users`.`id` = :id");
                
                                        $query2->bindValue(':isConfirmAccount', $isConfirmAccount);
                                        $query2->bindValue(':id', $number);
                        
                                        if($query2->execute()) { 
                                            $query3 = $con->prepare("DELETE FROM `activationlink` WHERE `activationlink`.`idUser` = :idUser");
                
                                            $query3->bindValue(':idUser', $number);
                            
                                            if($query3->execute()) { 
                                                echo json_encode(['status' => 'ok', 'data' => $successActivationAccount]);
                                            } else {
                                                echo json_encode(['status' => 'error', 'data' => $error]);
                                            }
                                            die();
                                        } else {
                                            echo json_encode(['status' => 'error', 'data' => 'Σφάλμα: Κάτι πήγε λάθος! Ο λογαριασμό σας δεν ενεργοποιήθηκε!']);
                                        }
                                        die();
                                    } else {
                                        echo json_encode(['status' => 'error', 'data' => $linkError]);
                                    }
                                    die();
                                } else {
                                    $query1 = $con->prepare("UPDATE `activationlink` SET `activationlink`.`randomLink` = :randomLink, `activationlink`.`expireLinkDate` = :expireLinkDate WHERE `activationlink`.`idUser` = :idUser");
                
                                    $query1->bindValue(':randomLink', $randomLink);
                                    $query1->bindValue(':expireLinkDate', $expireLinkDate);
                                    $query1->bindValue(':idUser', $number);
                    
                                    if($query1->execute()) {
                                        $to_email = $row4['email'];
                                        $subject = "Nutrition: Confirmation Email";
                                        $body = "Γεια σας,\n Πατήστε το σύνδεσμο παρακάτω για να ενεργοποιήσετε τον λογαριασμό σας \n https://zafora.ece.uowm.gr/~ece01121/Nutrition/public/activation.html?number=" . $row4['id'] . "&code=" . $randomLink . "&lang=" . $lang;
                                        $headers = "From: ece01121@zafora.ece.uowm.gr";
                                        
                                        if(mail($to_email, $subject, $body, $headers)) {
                                            echo json_encode(['status' => 'error', 'data' => $timeoutNewEmail]); 
                                        } else {
                                            echo json_encode(['status' => 'error', 'data' => $expireTimeNotSentEmail]); 
                                        }
                                        die();
                                    } else {
                                        echo json_encode(['status' => 'error', 'data' => $error]);                       
                                    }
                                    die();
                                }
                                die();
                            } else {
                                echo json_encode(['status' => 'error', 'data' => 'No Data']);
                            }
                            die();
                        } else {
                            echo json_encode(['status' => 'error', 'data' => $error]);
                        }
                        die();
                    } else {
                        echo json_encode(['status' => 'ok', 'data' => $accountAlraedyActivated]);
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