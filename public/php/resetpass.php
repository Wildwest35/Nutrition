<?php
    @session_start();
    header('Content-type: application/json');
    include 'corsAccess.php'; 

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
            $query = $con->prepare("SELECT token FROM users WHERE id = :id && token = :token");

            $query->bindParam(':id', $number);
            $query->bindParam(':token', $code);
    
            if($query->execute()) {
                $row = $query->fetch(PDO::FETCH_ASSOC);
                if(!empty($row)) {
                    $query1 = $con->prepare("UPDATE users SET pass = :pass, token = :token, binToken = :binToken WHERE id = :id");
            
                    $query1->bindValue(':pass', $hash);
                    $query1->bindValue(':token', $token);
                    $query1->bindValue(':binToken', $bin2hex);
                    $query1->bindValue(':id', $number);
    
                    if($query1->execute()) {
                        echo json_encode(['status' => 'ok', 'data' => 'Ο κωδικός πρόσβασής σας άλλαξε επιτυχώς! Σε 3 δευτερόλεπτα θα σας ανακατευθύνουμε στην σελίδα Σύνδεσης...']);
                    } else {
                        echo json_encode(['status' => 'error', 'data' => 'Κάτι πήγε λάθος! Σε 3 δευτερόλεπτα θα σας ανακατευθύνουμε στην σελίδα Σύνδεσης...']);                       
                    }
                } else {
                    echo json_encode(['status' => 'error', 'data' => 'Ο υπερσύνδεσμος έχει λείξει! Σε 3 δευτερόλεπτα θα σας ανακατευθύνουμε στην σελίδα Σύνδεσης...']);
                }
            } else {
                echo json_encode(['status' => 'error', 'data' => 'Κάτι πήγε λάθος! Σε 3 δευτερόλεπτα θα σας ανακατευθύνουμε στην σελίδα Σύνδεσης...']);
            }
        } else {
            echo json_encode(['status' => 'error', 'data' => 'Κάτι πήγε λάθος! Σε 3 δευτερόλεπτα θα σας ανακατευθύνουμε στην σελίδα Σύνδεσης...']);
        }
        
    } else {
        echo json_encode(['status' => 'error', 'data' => 'Κάτι πήγε λάθος! Σε 3 δευτερόλεπτα θα σας ανακατευθύνουμε στην σελίδα Σύνδεσης...']);
    }
?>