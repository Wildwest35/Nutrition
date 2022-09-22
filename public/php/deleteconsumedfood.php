<?php
//Access: Everyone
//Purpose: Collect all food info

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['username']) && isset($_POST['newVal']) && isset($_POST['calories']) && isset($_POST['protein']) && isset($_POST['carb']) && isset($_POST['fat']) && isset($_POST['fiber']) && isset($_POST['saturated']) && isset($_POST['unsaturated']) && isset($_POST['sugar']) && isset($_POST['bitamins'])) {
            $usernames = filter_var($_POST['username'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            if(isset($_SESSION['nameUser'])) {
                $username = $_SESSION['nameUser'];
            }
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }
            $newVal = filter_var($_POST['newVal'], FILTER_SANITIZE_NUMBER_INT);
            $calories = $_POST['calories']; 
            $protein = $_POST['protein'];
            $carb = $_POST['carb'];
            $fat = $_POST['fat'];
            $fiber = $_POST['fiber'];
            $saturated = $_POST['saturated'];
            $unsaturated = $_POST['unsaturated'];
            $sugar = $_POST['sugar'];
            $bitamins = $_POST['bitamins'];
            $fullDate = $_POST['fullDate'];

            include 'connect.php';
            
            if(!preg_match(AlphaNumeric(), $usernames) || !preg_match(Numeric(), $id) || !preg_match(Numeric(), $newVal) || !preg_match(Numeric(), $calories) || !preg_match(Numeric(), $protein) || !preg_match(Numeric(), $carb) || !preg_match(Numeric(), $fat) || !preg_match(Numeric(), $fiber) || !preg_match(Numeric(), $saturated) || !preg_match(Numeric(), $unsaturated) || !preg_match(Numeric(), $sugar) || !preg_match(Numeric(), $bitamins)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {


                $query = $con->prepare("DELETE FROM `dailyeatings` WHERE `dailyeatings`.`id` = :newVal");

                $query->bindValue(":newVal", $newVal);

                if($query->execute()) {
                    $query1 = $con->prepare("SELECT `dailysummaries`.`idDailyConsumptionGoals`, `dailysummaries`.`calories`, `dailysummaries`.`carb`, `dailysummaries`.`fat`, `dailysummaries`.`protein`, `dailysummaries`.`fiber`, `dailysummaries`.`saturated`, `dailysummaries`.`unsaturated`, `dailysummaries`.`sugar`, `dailysummaries`.`bitamins`
                                            FROM `dailysummaries`
                                            JOIN `dailyconsumptiongoals` ON `dailysummaries`.`idDailyConsumptionGoals` = `dailyconsumptiongoals`.`id`
                                            WHERE `dailyconsumptiongoals`.`idUser` = :id && `dailysummaries`.`dailySummariesDate` = :dailySummariesDate");

                    $query1->bindValue(":id", $id);
                    $query1->bindValue(":dailySummariesDate", $fullDate);

                    if($query1->execute()) {
                        $row1 = $query1->fetch(PDO::FETCH_ASSOC);

                        $totalCalories = $row1['calories'] - $calories;
                        $totalCarb = $row1['carb'] - $carb;
                        $totalFat = $row1['fat'] - $fat;
                        $totalProtein = $row1['protein'] - $protein;
                        $totalFiber = $row1['fiber'] - $fiber;
                        $totalSaturated = $row1['saturated'] - $saturated;
                        $totalUnsaturated = $row1['unsaturated'] - $unsaturated;
                        $totalSugar = $row1['sugar'] - $sugar;
                        $totalBitamins = $row1['bitamins'] - $bitamins;
                        
                        if($totalCalories < 0) 
                            $totalCalories = 0;
                        if($totalCarb < 0)
                            $totalCarb = 0;
                        if($totalFat < 0)
                            $totalFat = 0;
                        if($totalProtein < 0)
                            $totalProtein = 0;
                        if($totalFiber < 0) 
                            $totalFiber = 0;
                        if($totalSaturated < 0)
                            $totalSaturated = 0;
                        if($totalUnsaturated < 0)
                            $totalUnsaturated = 0;
                        if($totalSugar < 0)
                            $totalSugar = 0;
                        if($totalBitamins < 0)
                            $totalBitamins = 0;

                        $query2 = $con->prepare("UPDATE `dailysummaries` 
                                                SET `dailysummaries`.`calories` = :calories, `dailysummaries`.`carb` = :carb, `dailysummaries`.`fat` = :fat, `dailysummaries`.`protein` = :protein, `dailysummaries`.`fiber` = :fiber, `dailysummaries`.`saturated` = :saturated, `dailysummaries`.`unsaturated` = :unsaturated, `dailysummaries`.`sugar` = :sugar, `dailysummaries`.`bitamins` = :bitamins
                                                WHERE `dailysummaries`.`idDailyConsumptionGoals` = :id&& `dailysummaries`.`dailySummariesDate` = :dailySummariesDate");

                        $query2->bindParam(':calories', $totalCalories);
                        $query2->bindParam(':carb', $totalCarb);
                        $query2->bindParam(':fat', $totalFat);
                        $query2->bindParam(':protein', $totalProtein);
                        $query2->bindParam(':fiber', $totalFiber);
                        $query2->bindParam(':saturated', $totalSaturated);
                        $query2->bindParam(':unsaturated', $totalUnsaturated);
                        $query2->bindParam(':sugar', $totalSugar);
                        $query2->bindValue(":bitamins", $totalBitamins);
                        $query2->bindValue(":id", $row1['idDailyConsumptionGoals']);
                        $query2->bindValue(":dailySummariesDate", $fullDate);
            
                        if($query2->execute()) {
                            echo json_encode(['status' => 'ok', 'data' => true]);
                        } else {
                            echo json_encode(['status' => 'error', 'data' => false]);
                        }
                    } else {
                        echo json_encode(['status' => 'error', 'data' => false]);
                    }
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