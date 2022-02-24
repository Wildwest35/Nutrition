<?php
    @session_start();
    header('Content-type: application/json');
    include 'corsAccess.php';

    if(isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['sex']) && isset($_POST['age']) && isset($_POST['height']) && isset($_POST['weight']) && isset($_POST['isweight']) && isset($_POST['requestedWeight'])) {    
        include 'connect.php';

        date_default_timezone_set("Europe/Athens");
        $date = date("Y-m-d H:i:s");
        $expireLinkDate = date("Y-m-d H:i:s", strtotime('+2 hours'));
        $username = filter_var($_POST['username'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $pass = filter_var($_POST['password'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $repeatpassword = filter_var($_POST['repeatpassword'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $sex = filter_var($_POST['sex'], FILTER_SANITIZE_NUMBER_INT);
        $age = filter_var($_POST['age'], FILTER_SANITIZE_NUMBER_INT);
        $height = filter_var($_POST['height'], FILTER_SANITIZE_NUMBER_INT);
        $weights = filter_var($_POST['weight'], FILTER_SANITIZE_NUMBER_FLOAT);
        $isweight = filter_var($_POST['isweight'], FILTER_SANITIZE_NUMBER_INT);
        $requestedweight = filter_var($_POST['requestedWeight'], FILTER_SANITIZE_NUMBER_FLOAT);
        $isconfirmaccount = 0;
        $category = 1;
        $bin2hex = bin2hex(random_bytes(32));
        $token = hash_hmac('sha256', 'random token string: register.php', $bin2hex);
        $randomLink = hash_hmac('sha256', 'randomLink string: register.php', $bin2hex);
        $hash = hash_hmac('sha256', $pass, $bin2hex);

        $query1 = $con->prepare("SELECT username, email FROM users WHERE username = :username || email = :email");

        $query1->bindValue(":username", $username);
        $query1->bindValue(":email", $email);

        if($query1->execute()) {
             
            $row1 = $query1->fetch(PDO::FETCH_ASSOC);
            if(!empty($row1)) {
                if($username == $row1['username'] && $email == $row1['email']) {
                    echo json_encode(["status" => 'error', "data" => 'Το Όνομα Χρήστη και το Email υπάρχουν ήδη. Πηγαίνετε Πίσω να τα αλλάξετε!']);  
                } else if($username == $row1['username']) {
                    echo json_encode(["status" => 'error', "data" => 'Το Όνομα Χρήστη υπάρχει ήδη. Πηγαίνετε Πίσω να το αλλάξετε!']);  
                } else {
                    echo json_encode(["status" => 'error', "data" => 'Το Email υπάρχει ήδη. Πηγαίνετε Πίσω να το αλλάξετε!']);  
                }
            } else {
                $query = $con->prepare("INSERT INTO users(category, username, email, pass, sex, age, weights, height, isIncreaseWeight, requestedWeight, dateCreated, isConfirmAccount, token, binToken) VALUES(:category, :username, :email, :pass, :sex, :age, :weights, :height, :isIncreaseWeight, :requestedWeight, :dateCreated, :isConfirmAccount, :token, :binToken)");

                $query->bindParam(':category', $category);
                $query->bindParam(':username', $username);
                $query->bindParam(':email', $email);
                $query->bindParam(':pass', $hash);
                $query->bindParam(':sex', $sex);
                $query->bindParam(':age', $age);
                $query->bindParam(':weights', $weights);
                $query->bindParam(':height', $height);
                $query->bindParam(':isIncreaseWeight', $isweight);
                $query->bindParam(':requestedWeight', $requestedweight);
                $query->bindParam(':dateCreated', $date);
                $query->bindParam(':isConfirmAccount', $isconfirmaccount);
                $query->bindParam(':token', $token);
                $query->bindParam(':binToken', $bin2hex);
                                
                if($query->execute()) {
                    $query2 = $con->prepare("SELECT id, token FROM users WHERE username = :username && email = :email");

                    $query2->bindValue(":username", $username);
                    $query2->bindValue(":email", $email);
            
                    if($query2->execute()) {
                        $row2 = $query2->fetch(PDO::FETCH_ASSOC);

                        if(!empty($row2)) {
                            $query3 = $con->prepare("INSERT INTO activationlink(idUser, randomLink, expireLinkDate, dateCreated) VALUES(:idUser, :randomLink, :expireLinkDate, :dateCreated)");

                            $query3->bindParam(':idUser', $row2['id']);
                            $query3->bindParam(':randomLink', $randomLink);
                            $query3->bindParam(':expireLinkDate', $expireLinkDate);
                            $query3->bindParam(':dateCreated', $date);
                                            
                            if($query3->execute()) {
/*                                $to_email = $email;
                                $subject = "Nutrition: Confirmation Email";
                                $body = "Hi,\n Click the link below to activate your account \n https://zafora.ece.uowm.gr/~ece01121/Nutrition/public/activation.html?number=" . $row['id'] . "&code=" . $randomLink;
                                $headers = "From: no-reply@nutrition.com";
                                //sendSqsMail($to_email, $subject, $body);
                                 if(mail($to_email, $subject, $body, $headers)) {
                                    echo json_encode(["status" => 'ok', "data" => true]);
                                } else {
                                    echo json_encode(["status" => 'error', "data" => false]);
                                } */
                                echo json_encode(["status" => 'ok', "data" => true]);
                            } else {
                                echo json_encode(["status" => 'error', "data" => false]);
                            }
                        } else {
                            echo json_encode(["status" => 'error', "data" => false]); 
                        }
                    } else {
                        echo json_encode(["status" => 'error', "data" => false]);  
                    }
                } else {
                    echo json_encode(["status" => 'error', "data" => false]);  
                }                
            } 
        } else {
            echo json_encode(["status" => 'error', "data" => false]);  
        }
    } else {
        echo json_encode(["status" => 'error', "data" => false]);
    }
?>