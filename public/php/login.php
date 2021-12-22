<?php
    @session_start();
    header('Content-type: application/json');
    include 'corsAccess.php';

    if(isset($_POST['email']) && isset($_POST['password'])) {
        include 'connect.php';
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $pass = filter_var($_POST['password'], FILTER_SANITIZE_STRING);

        $query = $con->prepare("SELECT * FROM users WHERE email = :email");

        $query->bindValue(":email", $email);

        if($query->execute()) {
            $row = $query->fetch(PDO::FETCH_ASSOC);

            if(!empty($row)) {
                if (password_verify($pass, $row["pass"])) {
                    echo json_encode(['status' => 'ok', 'data' => true]);
                } else {
                    echo json_encode(['status' => 'error', 'data' => false]);
                }
            } else {
                echo json_encode(['status' => 'error', 'data' => false]);
            }
        }        
    }
?>