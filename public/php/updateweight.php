<?php
//Access: Everyone
//Purpose: Update weight

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['username']) && isset($_POST['sendLang']) && isset($_POST['newVal']) && isset($_POST['isIncreaseWeight']) && isset($_POST['exercise']) && isset($_POST['sex']) && isset($_POST['kilos']) && isset($_POST['age']) && isset($_POST['height']) && isset($_POST['fd'])) {
            //$weight = filter_var($_POST['newVal'], FILTER_SANITIZE_NUMBER_FLOAT);
            $weight = $_POST['newVal'];
            if($weight == "") {
                echo json_encode(['status' => 'error', 'data' => '* Το πεδίο είναι κενό!']);
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
                $age = $_POST['age'];
                $height = $_POST['height'];
                $isIncreaseWeight = $_POST['isIncreaseWeight'];     
                $exercise = filter_var($_POST['exercise'], FILTER_SANITIZE_NUMBER_INT);       
                $sex = $_POST['sex'];
                $kilos = $_POST['kilos'];
                $fd = $_POST['fd'];
                $a = $kilos;

            if($sex == 2) {
                $bm = (66.47 + (13.75*$weight) + (5.003*$height) - (6.755*$age)) * $fd;
            } else {
                $bm = (655.1 + (9.563*$weight) + (1.85*$height) - (4.676*$age)) * $fd;
            }
        
                if($isIncreaseWeight == 3) {
                    $bm = $bm + ((5500 * $a) / 7);
                } else if($isIncreaseWeight == 1) {
                    $bm = $bm - ((7500 * $a) / 7);
                }
                
    /*             echo $calories . ', ';
                $calories = roundOff($bm, 2);
                echo $calories;
                die(); */
                $calories = round($bm);
                $carb = round(($calories * 0.51) / 4);
                $protein = round(($calories * 0.18) / 4);
                $fat = round(($calories * 0.33) / 9);

                if(!preg_match(AlphaNumeric(), $username) || !preg_match(Numeric(), $weight) || !preg_match(Numeric(), $id) || !preg_match(Numeric(), $isIncreaseWeight) || !preg_match(Numeric(), $exercise) || !preg_match(Numeric(), $sex) || !preg_match(Numeric(), $age) || !preg_match(Numeric(), $height) || !preg_match(Numeric(), $kilos) || !preg_match(Numeric(), $fd)) {
                    echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
                    die();
                } else {
                    $query = $con->prepare("SELECT `users`.`weights`, `users`.`requestedWeight`, `users`.`isIncreaseWeight` FROM `users` WHERE `users`.`username` = :username && `users`.`id` = :id");

                    $query->bindValue(":username", $username);
                    $query->bindValue(":id", $id);

                    if($query->execute()) {
                        $row = $query->fetch(PDO::FETCH_ASSOC);
                        if($row['isIncreaseWeight'] == 1) {
                            $requestedWeight = ($weight - abs($row['weights'] - $row['requestedWeight']));
                        } else if($row['isIncreaseWeight'] == 2) {
                            $requestedWeight = $weight;
                        } else {
                            $requestedWeight = ($weight + abs($row['weights'] - $row['requestedWeight']));
                        }
                        
                        if(!empty($row)) {
                            $query1 = $con->prepare("UPDATE `users` SET `users`.`weights` = :weights, `users`.`requestedWeight` = :requestedWeight WHERE `users`.`username` = :newVal && `users`.`id` = :id");
                        
                            $query1->bindValue(':weights', $weight);
                            $query1->bindValue(':requestedWeight', $requestedWeight);
                            $query1->bindValue(':newVal', $username);
                            $query1->bindValue(":id", $id);

                            if($query1->execute()) {
                                $query2 = $con->prepare("UPDATE `dailyconsumptiongoals` 
                                                        SET `dailyconsumptiongoals`.`calories` = :calories, `dailyconsumptiongoals`.`protein` = :protein, `dailyconsumptiongoals`.`carb` = :carb, `dailyconsumptiongoals`.`fat` = :fat 
                                                        WHERE `dailyconsumptiongoals`.`idUser` = :id");

                                $query2->bindValue(":calories", $calories);
                                $query2->bindValue(":protein", $protein);
                                $query2->bindValue(":carb", $carb);
                                $query2->bindValue(":fat", $fat);
                                $query2->bindValue(":id", $id);

                                if($query2->execute()) {
                                    echo json_encode(['status' => 'ok', 'data' => ['weights' => $weight, 'requestedWeight' => $requestedWeight]]);
                                } else {
                                    echo json_encode(['status' => 'error', 'data' => '* Κάτι πήγε λάθος! Το Βάρος δεν άλλαξε!']);
                                }
                            } else {
                                echo json_encode(['status' => 'error', 'data' => '* Κάτι πήγε λάθος! Το Βάρος δεν άλλαξε!']);                       
                            }
                            die();
                        } else {
                            echo json_encode(['status' => 'error', 'data' => '* Κάτι πήγε λάθος! Το Βάρος δεν άλλαξε!']); 
                        }
                        die();
                    } else {
                        echo json_encode(['status' => 'error', 'data' => '* Κάτι πήγε λάθος! Το Βάρος δεν άλλαξε!']);
                    }
                    die();
                }
                die();
            }
        } else {
            echo json_encode(['status' => 'error', 'data' => '* Το πεδίο είναι κενό!']);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>