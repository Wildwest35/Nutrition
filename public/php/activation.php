<?php
//Access: Everyone
//Purpose: Activate account

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

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
            echo json_encode(['status' => 'error', 'data' => 'Ο υπερσύνδεσμος είναι λάθος!']);
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
                                                echo json_encode(['status' => 'ok', 'data' => 'Ο λογαριασμό σας ενεργοποιήθηκε επιτυχώς!']);
                                            } else {
                                                echo json_encode(['status' => 'error', 'data' => 'Σφάλμα: Κάτι πήγε λάθος!']);
                                            }
                                            die();
                                        } else {
                                            echo json_encode(['status' => 'error', 'data' => 'Σφάλμα: Κάτι πήγε λάθος! Ο λογαριασμό σας δεν ενεργοποιήθηκε!']);
                                        }
                                        die();
                                    } else {
                                        echo json_encode(['status' => 'error', 'data' => 'Ο υπερσύνδεσμος ενεργοποίσης είναι λάθος!']);
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
                                            echo json_encode(['status' => 'error', 'data' => 'Ο χρόνος ενεργοποίησης του λογαριασμού σας έχει λήξει! Μόλις σας στείλαμε νέο Email για την ενεργοποίηση  του λογαριασμού σας!']); 
                                        } else {
                                            echo json_encode(['status' => 'error', 'data' => 'Ο χρόνος ενεργοποίησης του λογαριασμού σας έχει λήξει! Κάτι πήγε λάθος με την επαναποστολή του email!']); 
                                        }
                                        die();
                                    } else {
                                        echo json_encode(['status' => 'error', 'data' => 'Σφάλμα: Κάτι πήγε λάθος!']);                       
                                    }
                                    die();
                                }
                                die();
                            } else {
                                echo json_encode(['status' => 'error', 'data' => 'No Data']);
                            }
                            die();
                        } else {
                            echo json_encode(['status' => 'error', 'data' => 'Σφάλμα: Κάτι πήγε λάθος!']);
                        }
                        die();
                    } else {
                        echo json_encode(['status' => 'ok', 'data' => "Ο λογαριασμό σας είναι ήδη ενεργοποιημένος!"]);
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