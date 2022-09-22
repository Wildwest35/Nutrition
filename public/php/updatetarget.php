<?php
//Access: Everyone
//Purpose: Update target

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['username']) && isset($_POST['sendLang']) && isset($_POST['newVal1']) && isset($_POST['newVal2']) && isset($_POST['newVal3']) && isset($_POST['sex']) && isset($_POST['kilos']) && isset($_POST['age']) && isset($_POST['height']) && isset($_POST['exercise']) && isset($_POST['fd'])) {
            //$newVal2 = filter_var($_POST['newVal2'], FILTER_SANITIZE_NUMBER_FLOAT);
            $newVal2 = $_POST['newVal2'];
            if($newVal2 == "") {
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
                $isIncreaseWeight = filter_var($_POST['newVal1'], FILTER_SANITIZE_NUMBER_INT);
                //$weight = filter_var($_POST['newVal3'], FILTER_SANITIZE_NUMBER_FLOAT);
                $weight = $_POST['newVal3'];
                $age = $_POST['age'];
                $height = $_POST['height'];
                $sex = $_POST['sex'];
                $kilos = $_POST['kilos'];
                $exercise = filter_var($_POST['exercise'], FILTER_SANITIZE_NUMBER_INT);
                $fd = $_POST['fd'];
                $a = $kilos;
                
                if($isIncreaseWeight == 1 && $weight <= $newVal2) {
                    echo json_encode(['status' => 'error', 'data' => '* Στο \"Επιθυμητό Βάρος\" πρέπει να εισάγετε λιγότερα κιλά από το \"Βάρος\"!']);
                    die();
                } else if($isIncreaseWeight == 3 && $weight >= $newVal2) {
                    echo json_encode(['status' => 'error', 'data' => '* Στο \"Επιθυμητό Βάρος\" πρέπει να εισάγετε περισσότερα κιλά από το \"Βάρος\"!']);
                    die();
                } else  {
                    if($isIncreaseWeight == 2) {
                        $newVal2 = $weight;
                    }

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
            
                    $calories = round($bm);
                    $carb = round(($calories * 0.51) / 4);
                    $protein = round(($calories * 0.18) / 4);
                    $fat = round(($calories * 0.33) / 9);

                    if(!preg_match(AlphaNumeric(), $username) || !preg_match(Numeric(), $isIncreaseWeight) || !preg_match(Numeric(), $weight) || !preg_match(Numeric(), $newVal2) || !preg_match(Numeric(), $id) || !preg_match(Numeric(), $sex) || !preg_match(Numeric(), $age) || !preg_match(Numeric(), $height) || !preg_match(Numeric(), $kilos) || !preg_match(Numeric(), $exercise) || !preg_match(Numeric(), $fd)) {
                        echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
                        die();
                    } else {
                        $query = $con->prepare("UPDATE `users` SET `users`.`isIncreaseWeight` = :isIncreaseWeight, `users`.`requestedWeight` = :requestedWeight WHERE `users`.`username` = :newVal && `users`.`id` = :id");

                        $query->bindValue(':isIncreaseWeight', $isIncreaseWeight);
                        $query->bindValue(':requestedWeight', $newVal2);
                        $query->bindValue(':newVal', $username);
                        $query->bindValue(":id", $id);

                        if($query->execute()) {
                            $query1 = $con->prepare("UPDATE `dailyconsumptiongoals` 
                                                    SET `dailyconsumptiongoals`.`calories` = :calories, `dailyconsumptiongoals`.`protein` = :protein, `dailyconsumptiongoals`.`carb` = :carb, `dailyconsumptiongoals`.`fat` = :fat 
                                                    WHERE `dailyconsumptiongoals`.`idUser` = :id");

                            $query1->bindValue(":calories", $calories);
                            $query1->bindValue(":protein", $protein);
                            $query1->bindValue(":carb", $carb);
                            $query1->bindValue(":fat", $fat);
                            $query1->bindValue(":id", $id);

                            if($query1->execute()) {
                                echo json_encode(['status' => 'ok', 'data' => ['isIncreaseWeight' => $isIncreaseWeight, 'requestedWeight' => $newVal2]]);
                            } else {
                                echo json_encode(['status' => 'error', 'data' => '* Κάτι πήγε λάθος! Το Target δεν άλλαξε!']);
                            }
                        } else {
                            echo json_encode(['status' => 'error', 'data' => '* Κάτι πήγε λάθος! Το Target δεν άλλαξε!']);
                        }
                        die();
                    }
                    die();
                }  
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