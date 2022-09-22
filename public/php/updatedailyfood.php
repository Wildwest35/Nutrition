<?php
//Access: Everyone
//Purpose: Update Daily Food

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['username']) && isset($_POST['idDailyFood']) && isset($_POST['idFood']) && isset($_POST['mealCategory']) && isset($_POST['previousCalories']) && isset($_POST['previousProtein']) && isset($_POST['previousCarb']) && isset($_POST['previousFat']) && isset($_POST['portion']) && isset($_POST['calories']) && isset($_POST['protein']) && isset($_POST['carb']) && isset($_POST['fat']) && isset($_POST['fiber']) && isset($_POST['saturated']) && isset($_POST['unsaturated']) && isset($_POST['sugar']) && isset($_POST['bitamins']) && isset($_POST['fullDate'])) {
            include 'connect.php';

            $usernames = filter_var($_POST['username'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            if(isset($_SESSION['nameUser'])) {
                $usernames = $_SESSION['nameUser'];
            }
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }
            $idFood = filter_var($_POST['idFood'], FILTER_SANITIZE_NUMBER_INT);
            $idDailyFood = filter_var($_POST['idDailyFood'], FILTER_SANITIZE_NUMBER_INT);
            $mealCategory = filter_var($_POST['mealCategory'], FILTER_SANITIZE_NUMBER_INT);
            $portion = $_POST['portion'];
            $previousCalories = $_POST['previousCalories'];
            $previousProtein = $_POST['previousProtein'];
            $previousCarb = $_POST['previousCarb'];
            $previousFat = $_POST['previousFat'];
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

            $difCalories = $calories - $previousCalories;
            $difProtein = $protein - $previousProtein;
            $difCarb = $carb - $previousCarb;
            $difFat = $fat - $previousFat;

            if(!preg_match(AlphaNumeric(), $usernames) || !preg_match(Numeric(), $id) || !preg_match(Numeric(), $idDailyFood) || !preg_match(Numeric(), $idFood) || !preg_match(Numeric(), $mealCategory) || !preg_match(Numeric(), $previousCalories) || !preg_match(Numeric(), $previousProtein) || !preg_match(Numeric(), $previousCarb) || !preg_match(Numeric(), $previousFat) || !preg_match(Numeric(), $portion) || !preg_match(Numeric(), $calories) || !preg_match(Numeric(), $protein) || !preg_match(Numeric(), $carb) || !preg_match(Numeric(), $fat) || !preg_match(Numeric(), $fiber) || !preg_match(Numeric(), $saturated) || !preg_match(Numeric(), $unsaturated) || !preg_match(Numeric(), $sugar) || !preg_match(Numeric(), $bitamins)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
                die();
            } else {
                $query = $con->prepare("UPDATE `dailyeatings` 
                                        SET `dailyeatings`.`idNameOfDailyMeals` = :idNameOfDailyMeals, `dailyeatings`.`portion` = :portion, `dailyeatings`.`calories` = :calories, `dailyeatings`.`protein` = :protein, `dailyeatings`.`carb` = :carb, `dailyeatings`.`fat` = :fat, `dailyeatings`.`fiber` = :fiber, `dailyeatings`.`saturated` = :saturated, `dailyeatings`.`unsaturated` = :unsaturated, `dailyeatings`.`sugar` = :sugar, `dailyeatings`.`bitamins` = :bitamins 
                                        WHERE `dailyeatings`.`id` = :idDailyFood && `dailyeatings`.`idUser` = :id && `dailyeatings`.`idFood` = :idFood && `dailyeatings`.`dailyEatingsDate` = :dailyEatingsDate");

                $query->bindValue(":idNameOfDailyMeals", $mealCategory);
                $query->bindValue(":portion", $portion);
                $query->bindValue(":calories", $calories);
                $query->bindValue(":protein", $protein);
                $query->bindValue(":carb", $carb);
                $query->bindValue(":fat", $fat);
                $query->bindValue(":fiber", $fiber);
                $query->bindValue(":saturated", $saturated);
                $query->bindValue(":unsaturated", $unsaturated);
                $query->bindValue(":sugar", $sugar);
                $query->bindValue(":bitamins", $bitamins);
                $query->bindValue(":idDailyFood", $idDailyFood);
                $query->bindValue(":id", $id);
                $query->bindValue(":idFood", $idFood);
                $query->bindValue(":dailyEatingsDate", $fullDate);

                if($query->execute()) {
                    $query2 = $con->prepare("SELECT  `dailysummaries`.`idDailyConsumptionGoals`, `dailysummaries`.`calories`, `dailysummaries`.`carb`, `dailysummaries`.`fat`, `dailysummaries`.`protein`, `dailysummaries`.`fiber`, `dailysummaries`.`saturated`, `dailysummaries`.`unsaturated`, `dailysummaries`.`sugar`, `dailysummaries`.`bitamins`
                                            FROM `dailysummaries`
                                            JOIN `dailyconsumptiongoals` ON `dailysummaries`.`idDailyConsumptionGoals` = `dailyconsumptiongoals`.`id`
                                            WHERE `dailyconsumptiongoals`.`idUser` = :id && `dailysummaries`.`dailySummariesDate` = :dailySummariesDate");

                    $query2->bindValue(":id", $id);
                    $query2->bindValue(":dailySummariesDate", $fullDate);
                    
                    if($query2->execute()) {
                        $row2 = $query2->fetch(PDO::FETCH_ASSOC);

                        $totalCalories = $row2['calories'] + $difCalories;
                        $totalCarb = $row2['carb'] + $difCarb;
                        $totalFat = $row2['fat'] + $difFat;
                        $totalProtein = $row2['protein'] + $difProtein;
                        $totalFiber = $row2['fiber'] + $fiber;
                        $totalSaturated = $row2['saturated'] + $saturated;
                        $totalUnsaturated = $row2['unsaturated'] + $unsaturated;
                        $totalSugar = $row2['sugar'] + $sugar;
                        $totalBitamins = $row2['bitamins'] + $bitamins;

                        $idDailyConsumptionGoals = $row2['idDailyConsumptionGoals'];

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

                        $query1 = $con->prepare("UPDATE `dailysummaries` 
                                                SET `dailysummaries`.`calories` = :calories, `dailysummaries`.`carb` = :carb, `dailysummaries`.`fat` = :fat, `dailysummaries`.`protein` = :protein, `dailysummaries`.`fiber` = :fiber, `dailysummaries`.`saturated` = :saturated, `dailysummaries`.`unsaturated` = :unsaturated, `dailysummaries`.`sugar` = :sugar, `dailysummaries`.`bitamins` = :bitamins
                                                WHERE `dailysummaries`.`idDailyConsumptionGoals` = :idDailyConsumptionGoals && `dailysummaries`.`dailySummariesDate` = :dailySummariesDate");
                
                        $query1->bindValue(":calories", $totalCalories);
                        $query1->bindValue(":protein", $totalProtein);
                        $query1->bindValue(":carb", $totalCarb);
                        $query1->bindValue(":fat", $totalFat);
                        $query1->bindParam(':fiber', $totalFiber);
                        $query1->bindParam(':saturated', $totalSaturated);
                        $query1->bindParam(':unsaturated', $totalUnsaturated);
                        $query1->bindParam(':sugar', $totalSugar);
                        $query1->bindValue(":bitamins", $totalBitamins);
                        $query1->bindValue(":idDailyConsumptionGoals", $idDailyConsumptionGoals);
                        $query1->bindValue(":dailySummariesDate", $fullDate);
            
                        if($query1->execute()) {
                            echo json_encode(['status' => 'ok', 'data' => ['difCalories' => $difCalories, 'difProtein' => $difProtein, 'difCarb' => $difCarb, 'difFat' => $difFat] ]);
                        } else {
                            echo json_encode(['status' => 'error', 'data' => 'false2']);
                        }
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
            echo json_encode(['status' => 'error', 'data' => false]);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>