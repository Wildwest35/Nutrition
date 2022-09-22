<?php
//Access: Everyone
//Purpose: Add Daily food

    @session_start();
    include 'corsAccess.php';
    include 'connect.php';
        
    $portion = 0;
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
    $fullDate = date("Y-m-d");
    $allUsers = [];
    $existedUsers = [];
    $insertUsers = [];
    
    $all = 0;
    $exist = 0; 
    $ins = 0;

    $query2 = $con->prepare("SELECT `dailyconsumptiongoals`.`id` FROM `dailyconsumptiongoals`");

    if($query2->execute()) {
        while($row2 = $query2->fetch(PDO::FETCH_ASSOC)) {
            $all = array_push($allUsers, $row2['id']);
        }

        $query1 = $con->prepare("SELECT  `dailysummaries`.`idDailyConsumptionGoals`
                                 FROM `dailysummaries`
                                 JOIN `dailyconsumptiongoals` ON `dailysummaries`.`idDailyConsumptionGoals` = `dailyconsumptiongoals`.`id`
                                 WHERE `dailysummaries`.`dailySummariesDate` = :dailySummariesDate");

        $query1->bindValue(":dailySummariesDate", $fullDate);
        
        if($query1->execute()) {
            while($row1 = $query1->fetch(PDO::FETCH_ASSOC)) {
                $exist = array_push($existedUsers, $row1['idDailyConsumptionGoals']);
            }
            
            if($all != 0) {
                for($i=0; $i<$all; $i++) {
                    if($exist != 0) {
                        for($j=0; $j<$exist; $j++) {
                            if($existedUsers[$j] == $allUsers[$i]) {
                                break;
                            }
                            
                            if($j == ($exist - 1)) {
                                $ins = array_push($insertUsers, $allUsers[$i]);
                            }
                        }
                    } else {
                        $ins = array_push($insertUsers, $allUsers[$i]);
                    }
                }

                if($ins != 0) {
                    for($i=0; $i<$ins; $i++) {
                        $query3 = $con->prepare("INSERT INTO dailysummaries(idDailyConsumptionGoals, calories, protein, carb, fat, fiber, saturated, unsaturated, sugar, bitamins, water, note, dailySummariesDate) VALUES(:idDailyConsumptionGoals, :calories, :protein, :carb, :fat, :fiber, :saturated, :unsaturated, :sugar, :bitamins, :water, :note, :dailySummariesDate)");

                        $query3->bindParam(':idDailyConsumptionGoals', $insertUsers[$i]);
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
                            //echo json_encode(['status' => 'ok', 'data' => true]);
                        } else {
                            echo json_encode(['status' => 'error', 'data' => 'false5']); 
                        }
                    }
                    die();
                } else {
                    echo json_encode(['status' => 'error', 'data' => 'false4']);
                }
                die();
            } else {
                echo json_encode(['status' => 'error', 'data' => 'false3']); 
            }
            die();
        } else {
            echo json_encode(['status' => 'error', 'data' => 'false2']); 
        }
        die();   
    } else {
        echo json_encode(['status' => 'error', 'data' => 'false1']); 
    }
    die(); 
?>