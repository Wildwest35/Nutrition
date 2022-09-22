<?php
//Access: Everyone
//Purpose: Delete created food

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['id'])) {
            $usernameId = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            $id = $_POST['id'];
            $calories = 0;
            $protein = 0;
            $carb = 0;
            $fat = 0;
            $fiber = 0;
            $saturated = 0;
            $unsaturated = 0;
            $sugar = 0;
            $bitamins = 0;
            $counter = 0;
            
            include 'connect.php';

            if(!preg_match(Numeric(), $id) || !preg_match(Numeric(), $usernameId)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $query = $con->prepare("SELECT `dailyeatings`.`idUser`, `dailyeatings`.`calories`, `dailyeatings`.`protein`, `dailyeatings`.`carb`, `dailyeatings`.`fat`, `dailyeatings`.`fiber`, `dailyeatings`.`saturated`, `dailyeatings`.`unsaturated`, `dailyeatings`.`sugar`, `dailyeatings`.`bitamins`, `dailyeatings`.`dailyEatingsDate`
                                        FROM `dailyeatings` WHERE `dailyeatings`.`idFood` = :id");

                $query->bindValue(":id", $id);

                if($query->execute()) {
                    $row_count = $query->rowCount();
                    while($row = $query->fetch(PDO::FETCH_ASSOC)) {
                        $counter++; 
                        $query1 = $con->prepare("SELECT `dailyconsumptiongoals`.`id`, `dailysummaries`.`calories`, `dailysummaries`.`protein`, `dailysummaries`.`carb`, `dailysummaries`.`fat`, `dailysummaries`.`fiber`, `dailysummaries`.`saturated`, `dailysummaries`.`unsaturated`, `dailysummaries`.`sugar`, `dailysummaries`.`bitamins`, `dailysummaries`.`dailySummariesDate`
                                                FROM `dailysummaries` 
                                                JOIN `dailyconsumptiongoals` ON `dailyconsumptiongoals`.`id` = `dailysummaries`.`idDailyConsumptionGoals`
                                                WHERE `dailyconsumptiongoals`.`idUser` = :idUser && `dailysummaries`.`dailySummariesDate` = :dailySummariesDate");

                        $query1->bindValue(":idUser", $row['idUser']);
                        $query1->bindValue(":dailySummariesDate", $row['dailyEatingsDate']);

                        if($query1->execute()) {
                            $row1 = $query1->fetch(PDO::FETCH_ASSOC);

                            $calories = $row1['calories'] - $row['calories'];
                            if($calories < 0) {
                                $calories = 0;
                            }
                            $protein = $row1['protein'] - $row['protein'];
                            if($protein < 0) {
                                $protein = 0;
                            }
                            $carb = $row1['carb'] - $row['carb'];
                            if($carb < 0) {
                                $carb = 0;
                            }
                            $fat = $row1['fat'] - $row['fat'];
                            if($fat < 0) {
                                $fat = 0;
                            }
                            $fiber = $row1['fiber'] - $row['fiber'];
                            if($fiber < 0) {
                                $fiber = 0;
                            }
                            $saturated = $row1['saturated'] - $row['saturated'];
                            if($saturated < 0) {
                                $saturated = 0;
                            }
                            $unsaturated = $row1['unsaturated'] - $row['unsaturated'];
                            if($unsaturated < 0) {
                                $unsaturated = 0;
                            }
                            $sugar = $row1['sugar'] - $row['sugar'];
                            if($sugar < 0) {
                                $sugar = 0;
                            }
                            $bitamins = $row1['bitamins'] - $row['bitamins'];
                            if($bitamins < 0) {
                                $bitamins = 0;
                            }

                            $query2 = $con->prepare("UPDATE `dailysummaries` 
                                                    SET `dailysummaries`.`calories` = :calories, `dailysummaries`.`protein` = :protein, `dailysummaries`.`carb` = :carb, `dailysummaries`.`fat` = :fat, `dailysummaries`.`fiber` = :fiber, `dailysummaries`.`saturated` = :saturated, `dailysummaries`.`unsaturated` = :unsaturated, `dailysummaries`.`sugar` = :sugar, `dailysummaries`.`bitamins` = :bitamins
                                                    WHERE `dailysummaries`.`idDailyConsumptionGoals` = :id && `dailysummaries`.`dailySummariesDate` = :dailySummariesDate");

                            $query2->bindValue(":calories", $calories);
                            $query2->bindValue(":protein", $protein);
                            $query2->bindValue(":carb", $carb);
                            $query2->bindValue(":fat", $fat);
                            $query2->bindValue(":fiber", $fiber);
                            $query2->bindValue(":saturated", $saturated);
                            $query2->bindValue(":unsaturated", $unsaturated);
                            $query2->bindValue(":sugar", $sugar);
                            $query2->bindValue(":bitamins", $bitamins);
                            $query2->bindValue(":id", $row1['id']);
                            $query2->bindValue(":dailySummariesDate", $row['dailyEatingsDate']);

                            if($query2->execute()) {
                                if($counter == $row_count) {
                                    echo json_encode(['status' => 'ok', 'data' => true]);
                                }
                            } else {
                                echo json_encode(['status' => 'error', 'data' => 'false1']);
                            }
                        } else {
                            echo json_encode(['status' => 'error', 'data' => false]);
                        }
                    }
                    if($row_count == 0) {
                        echo json_encode(['status' => 'ok', 'data' => true]);
                    }
                    die();
                } else {
                    echo json_encode(['status' => 'error', 'data' => false]);
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