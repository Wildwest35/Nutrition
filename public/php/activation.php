<?php
    @session_start();
    header('Content-type: application/json');
    include 'corsAccess.php'; 

    if(isset($_POST['number']) && isset($_POST['code'])) {
        $number = $_POST['number'];
        $code = $_POST['code'];
        date_default_timezone_set("Europe/Athens");
        $date = date("Y-m-d H:i:s");
        $expireLinkDate = date("Y-m-d H:i:s", strtotime('+2 hours'));
        $bin2hex = bin2hex(random_bytes(32));
        $randomLink = hash_hmac('sha256', 'randomLink string: activation.php', $bin2hex);
        $isConfirmAccount = 1;
        
        include 'connect.php';

        $query4 = $con->prepare("SELECT isConfirmAccount FROM users WHERE id = :id");

        $query4->bindValue(":id", $number);

        if($query4->execute()) {
            $row4 = $query4->fetch(PDO::FETCH_ASSOC);

            if(!empty($row4)) {
                if($row4['isConfirmAccount'] != $isConfirmAccount) {
                    $query = $con->prepare("SELECT randomLink, expireLinkDate FROM activationlink WHERE idUser = :idUser");

                    $query->bindValue(":idUser", $number);
            
                    if($query->execute()) {
                        $row = $query->fetch(PDO::FETCH_ASSOC);
            
                        if(!empty($row)) {
                            if($row['expireLinkDate'] > $date) {
                                if($code == $row['randomLink']) {
                                    $query2 = $con->prepare("UPDATE users SET isConfirmAccount = :isConfirmAccount WHERE id = :id");
            
                                    $query2->bindValue(':isConfirmAccount', $isConfirmAccount);
                                    $query2->bindValue(':id', $number);
                    
                                    if($query2->execute()) { 
                                        $query3 = $con->prepare("DELETE FROM activationlink WHERE idUser = :idUser");
            
                                        $query3->bindValue(':idUser', $number);
                        
                                        if($query3->execute()) { 
                                            echo json_encode(['status' => 'ok', 'data' => 'Ο λογαριασμό σας ενεργοποιήθηκε επιτυχώς! Σε 3 δευτερόλεπτα θα σας ανακατευθύνουμε στην σελίδα Σύνδεσης...']);
                                        } else {
                                            echo json_encode(['status' => 'error', 'data' => 'Κάτι πήγε λάθος! Σε 3 δευτερόλεπτα θα σας ανακατευθύνουμε στην σελίδα Σύνδεσης...']);
                                        }    
                                    } else {
                                        echo json_encode(['status' => 'error', 'data' => 'Κάτι πήγε λάθος! Ο λογαριασμό σας δεν ενεργοποιήθηκε! Σε 3 δευτερόλεπτα θα σας ανακατευθύνουμε στην σελίδα Σύνδεσης...']);
                                    }  
                                } else {
                                    echo json_encode(['status' => 'error', 'data' => 'Ο σύνδεσμος ενεργοποίσης είναι λάθος! Σε 3 δευτερόλεπτα θα σας ανακατευθύνουμε στην σελίδα Σύνδεσης...']);
                                }
                            } else {
                                $query1 = $con->prepare("UPDATE activationlink SET randomLink = :randomLink, expireLinkDate = :expireLinkDate WHERE idUser = :idUser");
            
                                $query1->bindValue(':randomLink', $randomLink);
                                $query1->bindValue(':expireLinkDate', $expireLinkDate);
                                $query1->bindValue(':idUser', $number);
                
                                if($query1->execute()) {
                                    //send mail
                                    echo json_encode(['status' => 'error', 'data' => 'Ο χρόνος ενεργοποίησης του λογαριασμού σας έχει λείξει! Μόλις σας στείλαμε νέο Email για την ενεργοποίση του λογαριασμού σας! Σε 3 δευτερόλεπτα θα σας ανακατευθύνουμε στην σελίδα Σύνδεσης...']); 
                                } else {
                                    echo json_encode(['status' => 'error', 'data' => 'Κάτι πήγε λάθος! Σε 3 δευτερόλεπτα θα σας ανακατευθύνουμε στην σελίδα Σύνδεσης...']);                       
                                }
                            }
                        } else {
                            echo json_encode(['status' => 'error', 'data' => 'No Data']);
                        }
                    } else {
                        echo json_encode(['status' => 'error', 'data' => 'Κάτι πήγε λάθος! Σε 3 δευτερόλεπτα θα σας ανακατευθύνουμε στην σελίδα Σύνδεσης...']);
                    }
                } else {
                    echo json_encode(['status' => 'ok', 'data' => "Ο λογαριασμό σας είναι ήδη ενεργοποιημένος! Σε 3 δευτερόλεπτα θα σας ανακατευθύνουμε στην σελίδα Σύνδεσης..."]);
                }
            } else {
                echo json_encode(['status' => 'error', 'data' => 'Ο σύνδεσμος είναι λάθος! Σε 3 δευτερόλεπτα θα σας ανακατευθύνουμε στην σελίδα Σύνδεσης...']);
            }
        } else {
            echo json_encode(['status' => 'error', 'data' => 'Κάτι πήγε λάθος! Σε 3 δευτερόλεπτα θα σας ανακατευθύνουμε στην σελίδα Σύνδεσης...']);
        }
    } else {
        echo json_encode(['status' => 'error', 'data' => 'Ο σύνδεσμος είναι λάθος! Σε 3 δευτερόλεπτα θα σας ανακατευθύνουμε στην σελίδα Σύνδεσης...']);
    }
?>