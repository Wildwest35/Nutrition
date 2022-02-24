<?php
    @session_start();
    
    header('Content-type: application/json');
    include 'corsAccess.php'; 

    if(isset($_POST['email'])) {
        include 'connect.php';

        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

        $query = $con->prepare("SELECT id, token FROM users WHERE email = :email");

        $query->bindValue(":email", $email);

        if($query->execute()) {
            $row = $query->fetch(PDO::FETCH_ASSOC);
            if(!empty($row)) {
                $bin2hex = bin2hex(random_bytes(32));
                $token = hash_hmac('sha256', 'this is a token', $bin2hex);

                $query1 = $con->prepare("UPDATE users SET token = :token WHERE email = :email");

                $query1->bindValue(':token', $token);
                $query1->bindValue(':email', $email);

                if($query1->execute()) {
                    //mail function
 /*                   $to_email = $email;
                    $subject = "Nutrition: Reset Password";
                    $body = "Hi,\n Click the link below to reset your password \n https://zafora.ece.uowm.gr/~ece01121/Nutrition/public/.html?number=" . $row['id'] . "&code=" . $row['token'];
                    $headers = "From: no-reply@nutrition.com";
                    //sendSqsMail($to_email, $subject, $body);
                                 if(mail($to_email, $subject, $body, $headers)) {
                        echo json_encode(["status" => 'ok', "data" => true]);
                    } else {
                        echo json_encode(["status" => 'error', "data" => false]);
                    } */
                    echo json_encode(["status" => 'ok', "data" => 'Το Email σας στάλθηκε!']); 
                } else {
                    echo json_encode(['status' => 'error', 'data' => 'Error: update query']);
                }
            } else {
                echo json_encode(['status' => 'error', 'data' => 'Δεν υπάρχει αυτό το Email!']);
            }
        } else {
            echo json_encode(['status' => 'error', 'data' => 'Error: select query']);
        }
    } else {
        echo json_encode(['status' => 'error', 'data' => 'email does not exist']);
    }
?>