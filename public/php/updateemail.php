<?php
//Access: Everyone
//Purpose: Update email

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['username']) && isset($_POST['newVal']) && isset($_POST['lang'])) {
            $newVal = filter_var($_POST['newVal'], FILTER_SANITIZE_EMAIL);
            $lang = filter_var($_POST['lang'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);

            if($newVal == "") {
                echo json_encode(['status' => 'error', 'data' => '* Το πεδίο είναι κενό!']);
                die();
            } else {
                include 'connect.php';

                $username = filter_var($_POST['username'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
                if(isset($_SESSION['nameUser'])) {
                    $username = $_SESSION['nameUser'];
                }
                $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
                if(isset($_SESSION['idUser'])) {
                    $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
                }

                date_default_timezone_set("Europe/Athens");
                $date = date("Y-m-d H:i:s");
                $bin2hex = bin2hex(random_bytes(32));
                $randomLink = hash_hmac('sha256', 'random token email string: updateemail.php', $bin2hex);
                
                if(!preg_match(AlphaNumeric(), $username) || !preg_match(Email(), $newVal) || !preg_match(Numeric(), $id)) {
                    echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
                    die();
                } else {
                    $query = $con->prepare("SELECT `users`.`email` FROM `users` WHERE `users`.`email` = :email");

                    $query->bindValue(":email", $newVal);

                    if($query->execute()) {
                        $row = $query->fetch(PDO::FETCH_ASSOC);
                            
                        if(!empty($row)) {
                            echo json_encode(['status' => 'error', 'data' => '* Αυτό το Email υπάρχει ήδη!']);
                            die();
                        } else {   
                            $query3 = $con->prepare("SELECT `confirmnewemail`.`email` FROM `confirmnewemail` WHERE `confirmnewemail`.`idUser` = :idUser");

                            $query3->bindValue(":idUser", $id);
                
                            if($query3->execute()) {
                                $row3 = $query3->fetch(PDO::FETCH_ASSOC);
                                if(!empty($row3)) {
                                    $query1 = $con->prepare("UPDATE `confirmnewemail` SET `confirmnewemail`.`email` = :email, `confirmnewemail`.`token` = :token WHERE `confirmnewemail`.`idUser` = :idUser");

                                    $query1->bindValue(':email', $newVal);
                                    $query1->bindValue(':token', $randomLink);
                                    $query1->bindValue(':idUser', $id);

                                    if($query1->execute()) {
                                        $to_email = $newVal;
                                        $subject = "Nutrition: Ταυτοποίηση Email";
                                        $body = "Γεια σας,\n Πατήστε το σύνδεσμο παρακάτω για να ταυτοποιήσετε το Νέο Email σας \n https://zafora.ece.uowm.gr/~ece01121/Nutrition/public/confirmNewEmail.html?number=" . $id . "&code=" . $randomLink . "&lang=" . $lang;
                                        $headers = "From: ece01121@zafora.ece.uowm.gr";
                                        
                                        if(mail($to_email, $subject, $body, $headers)) {
                                            echo json_encode(['status' => 'ok', 'data' => 'Ο σύνδεσμος για την ταυτοποίηση του Νέου Email σας στάλθηκε στο υπάρχον Email!']); 
                                        } else {
                                            echo json_encode(['status' => 'error', 'data' => 'Ο σύνδεσμος για την ταυτοποίηση του Νέου Email σας δεν στάλθηκε στο υπάρχον Email!']); 
                                        }
                                        die();
                                    } else {
                                        echo json_encode(['status' => 'error', 'data' => '* Κάτι πήγε λάθος! Το Email δεν ταυτοποιήθηκε!']);                       
                                    }
                                    die();
                                } else {
                                    $query4 = $con->prepare("INSERT INTO confirmnewemail(idUser, email, token, dateCreated) VALUES(:idUser, :email, :token, :dateCreated)");

                                    $query4->bindValue(':idUser', $id);
                                    $query4->bindValue(':email', $newVal);
                                    $query4->bindValue(':token', $randomLink);
                                    $query4->bindValue(':dateCreated', $date);

                                    if($query4->execute()) {
                                        $to_email = $newVal;
                                        $subject = "Nutrition: Ταυτοποίηση Email";
                                        $body = "Γεια σας,\n Πατήστε το σύνδεσμο παρακάτω για να ταυτοποιήσετε το Νέο Email σας \n https://zafora.ece.uowm.gr/~ece01121/Nutrition/public/confirmNewEmail.html?number=" . $id . "&code=" . $randomLink;
                                        $headers = "From: ece01121@zafora.ece.uowm.gr";
                                        
                                        if(mail($to_email, $subject, $body, $headers)) {
                                            echo json_encode(['status' => 'ok', 'data' => 'Ο σύνδεσμος για την ταυτοποίηση του Νέου Email σας στάλθηκε στο υπάρχον Email!']); 
                                        } else {
                                            echo json_encode(['status' => 'error', 'data' => 'Ο σύνδεσμος για την ταυτοποίηση του Νέου Email σας δεν στάλθηκε στο υπάρχον Email!']); 
                                        }
                                        die();
                                    } else {
                                        echo json_encode(['status' => 'error', 'data' => '* Κάτι πήγε λάθος!']);                       
                                    } 
                                    die();
                                }
                            } else {
                                echo json_encode(['status' => 'error', 'data' => '* Κάτι πήγε λάθος!']);
                            }
                            die();
                        }
                        die();
                    } else {
                        echo json_encode(['status' => 'error', 'data' => '* Κάτι πήγε λάθος!']);
                    }
                    die();
                }
                die();
            }
            die();  
        } else {
            echo json_encode(['status' => 'error', 'data' => '* Το πεδίο είναι κενό!']);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>