<?php
    @session_start();
    header('Content-type: application/json');
    include 'corsAccess.php'; 

    if(isset($_POST['number']) && isset($_POST['code'])) {
        $number = filter_var($_POST['number'], FILTER_SANITIZE_NUMBER_INT);
        $code = filter_var($_POST['code'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);

        include 'connect.php';

        $query = $con->prepare("SELECT username, token FROM users WHERE id = :id && token = :token");

        $query->bindParam(':id', $number);
        $query->bindParam(':token', $code);

        if($query->execute()) {
            $row = $query->fetch(PDO::FETCH_ASSOC);
            if(!empty($row)) {
                echo json_encode(['status' => 'ok', 'data' => true]);
            } else {
                echo json_encode(['status' => 'error', 'data' => 'Ο υπερσύνδεσμος έχει λείξει! Σε 3 δευτερόλεπτα θα σε ανακατευθύνουμε στην σελίδα Σύνδεσης...']);
            }
        } else {
            echo json_encode(['status' => 'error', 'data' => 'Σφάλμα: Σε 3 δευτερόλεπτα θα σε ανακατευθύνουμε στην σελίδα Σύνδεσης...']);
        }
    } else {
        echo json_encode(['status' => 'error', 'data' => 'The data are empty!']);
    }
?>