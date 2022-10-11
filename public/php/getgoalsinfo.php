<?php
//Access: Authenticated Users
//Purpose: Collect all Goal info

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['username'])) {
            $usernames = filter_var($_POST['username'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            if(isset($_SESSION['nameUser'])) {
                $usernames = $_SESSION['nameUser'];
            }
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }
            if(isset($_POST['fullDate'])) {
                $date = $_POST['fullDate'];
            } else {
                $date = date("Y-m-d");
            }
            $calories = 0;
            $protein = 0;
            $carb = 0;
            $fat = 0;
            $fiber = 0;
            $saturated = 0;
            $unsaturated = 0;
            $sugar = 0;
            $bitamins = 0;
            $water = 0;
            $note = '';

            include 'connect.php';
            
            if(!preg_match(AlphaNumeric(), $usernames) || !preg_match(Numeric(), $id)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
                die();//Format(, 'Y-m-d')CAST(`dailysummaries`.`dailySummariesDate` as DATE) as dailySummariesDate, 
            } else {
                $query = $con->prepare("SELECT `dailysummaries`.`calories` as startCalories, `dailysummaries`.`protein` as startProtein, `dailysummaries`.`carb` as startCarb, `dailysummaries`.`fat` as startFat, `dailysummaries`.`water` as startWater, `dailysummaries`.`note`, `dailyconsumptiongoals`.`calories`, `dailyconsumptiongoals`.`protein`, `dailyconsumptiongoals`.`carb`, `dailyconsumptiongoals`.`fat`, `dailyconsumptiongoals`.`water` 
                                        FROM `dailysummaries`
                                        JOIN `dailyconsumptiongoals` ON `dailyconsumptiongoals`.`id` = `dailysummaries`.`idDailyConsumptionGoals`
                                        JOIN `users` ON `dailyconsumptiongoals`.`idUser` = `users`.`id`
                                        WHERE `users`.`username` = :username && `users`.`id` = :id && `dailysummaries`.`dailySummariesDate` = :dailySummariesDate");

                $query->bindValue(":username", $usernames);
                $query->bindValue(":id", $id);
                $query->bindValue(":dailySummariesDate", $date);

                if($query->execute()) {
                    $row = $query->fetchAll(PDO::FETCH_ASSOC);

                    if(!empty($row)) {
                        echo json_encode(['status' => 'ok', 'data' => $row]);
                    } else {
                        $query2 = $con->prepare("SELECT `dailyconsumptiongoals`.`id` FROM `dailyconsumptiongoals` WHERE `dailyconsumptiongoals`.`idUser` = :id");

                        //$query2->bindValue(":username", $usernames);
                        $query2->bindValue(":id", $id);

                        if($query2->execute()) {
                            $row2 = $query2->fetch(PDO::FETCH_ASSOC);
                            if(!empty($row2)) {
                                $query3 = $con->prepare("INSERT INTO dailysummaries(idDailyConsumptionGoals, calories, protein, carb, fat, fiber, saturated, unsaturated, sugar, bitamins, water, note, dailySummariesDate) VALUES(:idDailyConsumptionGoals, :calories, :protein, :carb, :fat, :fiber, :saturated, :unsaturated, :sugar, :bitamins, :water, :note, :dailySummariesDate)");

                                $query3->bindParam(':idDailyConsumptionGoals', $row2['id']);
                                $query3->bindParam(':calories', $calories);
                                $query3->bindParam(':protein', $protein);
                                $query3->bindParam(':carb', $carb);
                                $query3->bindParam(':fat', $fat);
                                $query3->bindParam(':fiber', $fiber);
                                $query3->bindParam(':saturated', $saturated);
                                $query3->bindParam(':unsaturated', $unsaturated);
                                $query3->bindParam(':sugar', $sugar);
                                $query3->bindParam(':bitamins', $bitamins);
                                $query3->bindParam(':water', $water);
                                $query3->bindParam(':note', $note);
                                $query3->bindParam(':dailySummariesDate', $date);
                                                
                                if($query3->execute()) {  
                                    $query4 = $con->prepare("SELECT `dailysummaries`.`calories` as startCalories, `dailysummaries`.`protein` as startProtein, `dailysummaries`.`carb` as startCarb, `dailysummaries`.`fat` as startFat, `dailysummaries`.`water` as startWater, `dailysummaries`.`note`, `dailyconsumptiongoals`.`calories`, `dailyconsumptiongoals`.`protein`, `dailyconsumptiongoals`.`carb`, `dailyconsumptiongoals`.`fat`, `dailyconsumptiongoals`.`water` 
                                                            FROM `dailysummaries`
                                                            JOIN `dailyconsumptiongoals` ON `dailyconsumptiongoals`.`id` = `dailysummaries`.`idDailyConsumptionGoals`
                                                            JOIN `users` ON `dailyconsumptiongoals`.`idUser` = `users`.`id`
                                                            WHERE `users`.`username` = :username && `users`.`id` = :id && `dailysummaries`.`dailySummariesDate` = :dailySummariesDate");

                                    $query4->bindValue(":username", $usernames);
                                    $query4->bindValue(":id", $id);
                                    $query4->bindValue(":dailySummariesDate", $date);

                                    if($query4->execute()) {
                                        $row4 = $query4->fetchAll(PDO::FETCH_ASSOC);

                                        echo json_encode(['status' => 'ok', 'data' => $row4]);
                                    } else {
                                        echo json_encode(['status' => 'error', 'data' => 'false1']);
                                    }
                                } else {
                                    echo json_encode(['status' => 'error', 'data' => 'false2']);
                                }
                                die();
                            } else {
                                echo json_encode(['status' => 'error', 'data' => 'false3']);                    
                            }
                            die();
                        } else {
                            echo json_encode(['status' => 'error', 'data' => 'false4']);
                        }
                        die();
                    }
                    die();
                } else {
                    echo json_encode(['status' => 'error', 'data' => 'false5']);
                }
                die();
            }
            die();
        } else {
            echo json_encode(['status' => 'error', 'data' => false]);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>