<?php
//Access: Everyone
//Purpose: Register a new user

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['sex']) && isset($_POST['age']) && isset($_POST['height']) && isset($_POST['weight']) && isset($_POST['isweight']) && isset($_POST['requestedWeight']) && isset($_POST['exercise']) && isset($_POST['kilos']) && isset($_POST['fd'])) { 
        include 'connect.php';

        date_default_timezone_set("Europe/Athens");
        $weightDate = date("Y-m-d");
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
        $exercise = filter_var($_POST['exercise'], FILTER_SANITIZE_NUMBER_INT);
        $kilos = $_POST['kilos'];
        $sendLang = filter_var($_POST['sendLang'], FILTER_SANITIZE_NUMBER_INT);
        $lang = 'gr';
        $isconfirmaccount = 1;
        $category = 1;
        $bin2hex = bin2hex(random_bytes(32));
        $token = hash_hmac('sha256', 'random token string: register.php', $bin2hex);
        $randomLink = hash_hmac('sha256', 'randomLink string: register.php', $bin2hex);
        $apiToken = hash_hmac('sha256', 'apiToken string: register.php', $bin2hex);
        $hash = hash_hmac('sha256', $pass, $bin2hex);
        $water = 2400;

        $fd = $_POST['fd'];
        $a = $kilos;

        if($sex == 2) {
            $bm = (66.47 + (13.75*$weights) + (5.003*$height) - (6.755*$age)) * $fd;
        } else {
            $bm = (655.1 + (9.563*$weights) + (1.85*$height) - (4.676*$age)) * $fd;
        }

        if($isweight == 3) {
            $bm = $bm + ((5500 * $a) / 7);
        } else if($isweight == 1) {
            $bm = $bm - ((7500 * $a) / 7);
        }

        $calories = round($bm);
        $carb = round(($calories * 0.51) / 4);
        $protein = round(($calories * 0.18) / 4);
        $fat = round(($calories * 0.33) / 9);

        if(!preg_match(AlphaNumeric(), $username) || !preg_match(Email(), $email) || !preg_match(Numeric(), $sex) || !preg_match(Numeric(), $age) || !preg_match(Numeric(), $height) || !preg_match(Numeric(), $weights) || !preg_match(Numeric(), $isweight) || !preg_match(Numeric(), $requestedweight) || !preg_match(Numeric(), $exercise) || !preg_match(Numeric(), $kilos) || !preg_match(Numeric(), $fd)) {
            echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
        } else {
            $query1 = $con->prepare("SELECT `users`.`username`, `users`.`email` FROM `users` WHERE `users`.`username` = :username || `users`.`email` = :email");

            $query1->bindValue(":username", $username);
            $query1->bindValue(":email", $email);

            if($query1->execute()) {
                
                $row1 = $query1->fetch(PDO::FETCH_ASSOC);
                if(!empty($row1)) {
                    if($username == $row1['username'] && $email == $row1['email']) {
                        echo json_encode(["status" => 'error', "data" => 'Το Usename και το Email υπάρχουν ήδη. Πηγαίνετε Πίσω να τα αλλάξετε!']);  
                    } else if($username == $row1['username']) {
                        echo json_encode(["status" => 'error', "data" => 'Το Usename υπάρχει ήδη. Πηγαίνετε Πίσω να το αλλάξετε!']);  
                    } else {
                        echo json_encode(["status" => 'error', "data" => 'Το Email υπάρχει ήδη. Πηγαίνετε Πίσω να το αλλάξετε!']);  
                    }
                    die();
                } else {
                    $query = $con->prepare("INSERT INTO users(idLang, category, username, email, pass, sex, age, weights, height, isIncreaseWeight, requestedWeight, exercise, kilos, dateCreated, isConfirmAccount, token, binToken, apiToken) VALUES(:idLang, :category, :username, :email, :pass, :sex, :age, :weights, :height, :isIncreaseWeight, :requestedWeight, :exercise, :kilos, :dateCreated, :isConfirmAccount, :token, :binToken, :apiToken)");

                    $query->bindParam(':idLang', $sendLang);
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
                    $query->bindParam(':exercise', $exercise);
                    $query->bindParam(':kilos', $kilos);
                    $query->bindParam(':dateCreated', $date);
                    $query->bindParam(':isConfirmAccount', $isconfirmaccount);
                    $query->bindParam(':token', $token);
                    $query->bindParam(':binToken', $bin2hex);
                    $query->bindParam(':apiToken', $apiToken);
                                    
                    if($query->execute()) {
                        $query2 = $con->prepare("SELECT `users`.`id`, `users`.`token` FROM `users` WHERE `users`.`username` = :username && `users`.`email` = :email");

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
                                    $query4 = $con->prepare("INSERT INTO dailyconsumptiongoals(idUser, calories, protein, carb, fat, water, goalDate) VALUES(:idUser, :calories, :protein, :carb, :fat, :water, :goalDate)");

                                    $query4->bindParam(':idUser', $row2['id']);
                                    $query4->bindParam(':calories', $calories);
                                    $query4->bindParam(':protein', $protein);
                                    $query4->bindParam(':carb', $carb);
                                    $query4->bindParam(':fat', $fat);
                                    $query4->bindParam(':water', $water);
                                    $query4->bindParam(':goalDate', $date);
                                                    
                                    if($query4->execute()) {
                                        $query5 = $con->prepare("INSERT INTO weight(idUser, weight, weightDate) VALUES(:idUser, :weight, :weightDate)");

                                        $query5->bindParam(':idUser', $row2['id']);
                                        $query5->bindParam(':weight', $weights);
                                        $query5->bindParam(':weightDate', $weightDate);
                                                        
                                        if($query5->execute()) {
                                            if($sendLang == 2) {
                                                $lang = 'gr';
                                            } else {
                                                $lang = 'en';
                                            }
                                            $to_email = $email;
                                            $subject = "Nutrition: Confirmation Email";
                                            $body = "Hi,\n Click the link below to activate your account within 2 hours \n https://zafora.ece.uowm.gr/~ece01121/Nutrition/public/activation.html?number=" . $row2['id'] . "&code=" . $randomLink . "&lang=" . $lang;
                                            $headers = "From: ece01121@zafora.ece.uowm.gr";
                                            
                                            if(mail($to_email, $subject, $body, $headers)) {
                                                echo json_encode(["status" => 'ok', "data" => true]);
                                            } else {
                                                echo json_encode(["status" => 'error', "data" => false]);
                                            }
                                            die();
                                        } else {
                                            echo json_encode(["status" => 'error', "data" => false]);
                                        }
                                    } else {
                                        echo json_encode(["status" => 'error', "data" => false]);
                                    }
                                    die();
                                } else {
                                    echo json_encode(["status" => 'error', "data" => false]);
                                }
                                die();
                            } else {
                                echo json_encode(["status" => 'error', "data" => false]); 
                            }
                            die();
                        } else {
                            echo json_encode(["status" => 'error', "data" => false]);  
                        }
                        die();
                    } else {
                        echo json_encode(["status" => 'error', "data" => false]);  
                    }
                    die();              
                }
                die();
            } else {
                echo json_encode(["status" => 'error', "data" => false]);  
            }
            die();
        }
        die();
    } else {
        echo json_encode(["status" => 'error', "data" => false]);
    }
    die();
?>