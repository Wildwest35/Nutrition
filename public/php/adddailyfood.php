<?php
//Access: Everyone
//Purpose: Add Daily food

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['username'])&& isset($_POST['idFood']) && isset($_POST['mealCategory']) && isset($_POST['isFavourite']) && isset($_POST['portion']) && isset($_POST['calories']) && isset($_POST['protein']) && isset($_POST['carb']) && isset($_POST['fat']) && isset($_POST['fiber']) && isset($_POST['saturated']) && isset($_POST['unsaturated']) && isset($_POST['sugar']) && isset($_POST['bitamins']) && isset($_POST['fullDate'])) {
            $usernames = filter_var($_POST['username'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            if(isset($_SESSION['nameUser'])) {
                $usernames = $_SESSION['nameUser'];
            }
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }
            $idFood = filter_var($_POST['idFood'], FILTER_SANITIZE_NUMBER_INT);
            $mealCategory = filter_var($_POST['mealCategory'], FILTER_SANITIZE_NUMBER_INT);
            $isFavourite = filter_var($_POST['isFavourite'], FILTER_SANITIZE_NUMBER_INT);
    /*        $portion = filter_var($_POST['portion'], FILTER_SANITIZE_NUMBER_INT);
            $calories = filter_var($_POST['calories'], FILTER_SANITIZE_NUMBER_FLOAT);
            $protein = filter_var($_POST['protein'], FILTER_SANITIZE_NUMBER_FLOAT);
            $carb = filter_var($_POST['carb'], FILTER_SANITIZE_NUMBER_FLOAT);
            $fat = filter_var($_POST['fat'], FILTER_SANITIZE_NUMBER_FLOAT);
            $saturated = filter_var($_POST['saturated'], FILTER_SANITIZE_NUMBER_FLOAT);
            $unsaturated = filter_var($_POST['unsaturated'], FILTER_SANITIZE_NUMBER_FLOAT);
            $sugar = filter_var($_POST['sugar'], FILTER_SANITIZE_NUMBER_FLOAT);
            $bitamins = filter_var($_POST['bitamins'], FILTER_SANITIZE_NUMBER_FLOAT);*/
            $portion = $_POST['portion'];
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
            $water = 0;
            $note = '';
            /* echo 'protein = '.$protein.', carb = '.$carb.', fat = '.$fat.', saturated = '.$saturated;
            die(); */
            include 'connect.php';

            if(!preg_match(AlphaNumeric(), $usernames) || !preg_match(Numeric(), $id) || !preg_match(Numeric(), $idFood) || !preg_match(Numeric(), $mealCategory) || !preg_match(Numeric(), $isFavourite) || !preg_match(Numeric(), $portion) || !preg_match(Numeric(), $calories) || !preg_match(Numeric(), $protein) || !preg_match(Numeric(), $carb) || !preg_match(Numeric(), $fat) || !preg_match(Numeric(), $fiber) || !preg_match(Numeric(), $saturated) || !preg_match(Numeric(), $unsaturated) || !preg_match(Numeric(), $sugar) || !preg_match(Numeric(), $bitamins)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {   
                $query = $con->prepare("INSERT INTO dailyeatings(idUser, idFood, idNameOfDailyMeals, isFavourite, portion, calories, protein, carb, fat, fiber, saturated, unsaturated, sugar, bitamins, dailyEatingsDate) VALUES(:idUser, :idFood, :idNameOfDailyMeals, :isFavourite, :portion, :calories, :protein, :carb, :fat, :fiber, :saturated, :unsaturated, :sugar, :bitamins, :dailyEatingsDate)");

                $query->bindParam(':idUser', $id);
                $query->bindParam(':idFood', $idFood);
                $query->bindParam(':idNameOfDailyMeals', $mealCategory);
                $query->bindParam(':isFavourite', $isFavourite);
                $query->bindParam(':portion', $portion);
                $query->bindParam(':calories', $calories);
                $query->bindParam(':protein', $protein);
                $query->bindParam(':carb', $carb);
                $query->bindParam(':fat', $fat);
                $query->bindParam(':fiber', $fiber);
                $query->bindParam(':saturated', $saturated);
                $query->bindParam(':unsaturated', $unsaturated);
                $query->bindParam(':sugar', $sugar);
                $query->bindParam(':bitamins', $bitamins);
                $query->bindParam(':dailyEatingsDate', $fullDate);

                if($query->execute()) {
                    $query1 = $con->prepare("SELECT  `dailysummaries`.`idDailyConsumptionGoals`, `dailysummaries`.`calories`, `dailysummaries`.`carb`, `dailysummaries`.`fat`, `dailysummaries`.`protein`, `dailysummaries`.`fiber`, `dailysummaries`.`saturated`, `dailysummaries`.`unsaturated`, `dailysummaries`.`sugar`, `dailysummaries`.`bitamins`
                                            FROM `dailysummaries`
                                            JOIN `dailyconsumptiongoals` ON `dailysummaries`.`idDailyConsumptionGoals` = `dailyconsumptiongoals`.`id`
                                            WHERE `dailyconsumptiongoals`.`idUser` = :id && `dailysummaries`.`dailySummariesDate` = :dailySummariesDate");

                    $query1->bindValue(":id", $id);
                    $query1->bindValue(":dailySummariesDate", $fullDate);
                    
                    if($query1->execute()) {
                        $row1 = $query1->fetch(PDO::FETCH_ASSOC);

                        if(!empty($row1)) {
                            $totalCalories = $row1['calories'] + $calories;
                            $totalCarb = $row1['carb'] + $carb;
                            $totalFat = $row1['fat'] + $fat;
                            $totalProtein = $row1['protein'] + $protein;
                            $totalFiber = $row1['fiber'] + $fiber;
                            $totalSaturated = $row1['saturated'] + $saturated;
                            $totalUnsaturated = $row1['unsaturated'] + $unsaturated;
                            $totalSugar = $row1['sugar'] + $sugar;
                            $totalBitamins = $row1['bitamins'] + $bitamins;
                            
                            $idDailyConsumptionGoals = $row1['idDailyConsumptionGoals'];

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
                                                    WHERE `dailysummaries`.`idDailyConsumptionGoals` = :idDailyConsumptionGoals && `dailysummaries`.`dailySummariesDate` = :dailySummariesDate");

                            $query2->bindParam(':calories', $totalCalories);
                            $query2->bindParam(':carb', $totalCarb);
                            $query2->bindParam(':fat', $totalFat);
                            $query2->bindParam(':protein', $totalProtein);
                            $query2->bindParam(':fiber', $totalFiber);
                            $query2->bindParam(':saturated', $totalSaturated);
                            $query2->bindParam(':unsaturated', $totalUnsaturated);
                            $query2->bindParam(':sugar', $totalSugar);
                            $query2->bindValue(":bitamins", $totalBitamins);
                            $query2->bindValue(":idDailyConsumptionGoals", $idDailyConsumptionGoals);
                            $query2->bindValue(":dailySummariesDate", $fullDate);
                
                            if($query2->execute()) {
                                echo json_encode(['status' => 'ok', 'data' => true]);
                            } else {
                                echo json_encode(['status' => 'error', 'data' => 'false1']);
                            }
                            die();
                        } else {
                            $query4 = $con->prepare("SELECT `dailyconsumptiongoals`.`id` FROM `dailyconsumptiongoals` WHERE `dailyconsumptiongoals`.`idUser` = :id");

                            $query4->bindValue(":id", $id);
        
                            if($query4->execute()) {
                                $row4 = $query4->fetch(PDO::FETCH_ASSOC);
                                if(!empty($row4)) {
                                    $query3 = $con->prepare("INSERT INTO dailysummaries(idDailyConsumptionGoals, calories, protein, carb, fat, fiber, saturated, unsaturated, sugar, bitamins, water, note, dailySummariesDate) VALUES(:idDailyConsumptionGoals, :calories, :protein, :carb, :fat, :fiber, :saturated, :unsaturated, :sugar, :bitamins, :water, :note, :dailySummariesDate)");

                                    $query3->bindParam(':idDailyConsumptionGoals', $row4['id']);
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
                                    $query3->bindParam(':dailySummariesDate', $fullDate);
                        
                                    if($query3->execute()) {
                                        echo json_encode(['status' => 'ok', 'data' => true]);
                                    } else {
                                        echo json_encode(['status' => 'error', 'data' => 'false5']);
                                    }
                                    die();
                                } else {
                                    echo json_encode(['status' => 'error', 'data' => 'false7']);
                                }
                            } else {
                                echo json_encode(['status' => 'error', 'data' => 'false6']);
                            }
                        }
                    } else {
                        echo json_encode(['status' => 'error', 'data' => 'false2']);
                    }
                    die();
                } else {
                    echo json_encode(['status' => 'error', 'data' => 'false3']);
                }
                die();
            }
            die();
        } else {
            echo json_encode(['status' => 'error', 'data' => 'false4']);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>