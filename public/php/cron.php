<?php
//Access: Everyone
//Purpose: 

/* date_default_timezone_set("Europe/Athens");
$queued_at = date("Y-m-d H:i:s");

$query = $con->prepare("INSERT INTO cronjob(taskName, queued_at, completed_at, is_proccessed) VALUES(:taskName, :queued_at, :completed_at, :is_proccessed)");

$query->bindParam(':taskName', $taskName);
$query->bindParam(':queued_at', $queued_at);
$query->bindParam(':completed_at', $completed_at);
$query->bindParam(':is_proccessed', $is_proccessed); 
                
if($query->execute()) { 

} else {

}
*/
//nl2br()
    echo "Starting execution at " . date("d-m-Y H:i:s") . "\r\n";
    include 'connect.php';
    echo "Connecting to database...\r\n";

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
    $fullDate = date("Y-m-d");//'2022-09-16';//
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
        echo "Find all users... \r\n";
        
        $query1 = $con->prepare("SELECT  `dailysummaries`.`idDailyConsumptionGoals`
                                 FROM `dailysummaries`
                                 JOIN `dailyconsumptiongoals` ON `dailysummaries`.`idDailyConsumptionGoals` = `dailyconsumptiongoals`.`id`
                                 WHERE `dailysummaries`.`dailySummariesDate` = :dailySummariesDate");

        $query1->bindValue(":dailySummariesDate", $fullDate);
        
        if($query1->execute()) {
            while($row1 = $query1->fetch(PDO::FETCH_ASSOC)) {
                $exist = array_push($existedUsers, $row1['idDailyConsumptionGoals']);
            }
            echo "Find users that has been already inserted... \r\n";
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
                echo "Find users that hasn't inserted yet... \r\n";
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
                            echo "Something wrong with 3rd query...\r\n";  
                        }
                    }
                    echo "All users inserted to the system successfuly!!! at " . date("d-m-Y H:i:s") . "\r\n";
                    die();
                } else {
                    echo "All users has already inserted in the system at " . date("d-m-Y") . "\r\n"; 
                }
                die();
            } else {
                echo "There are no users in the system...\r\n"; 
            }
            die();
        } else {
            echo "Something wrong with 2nd query...\r\n"; 
        }
        die();   
    } else {
        echo "Something wrong with 1st query...\r\n"; 
    }
    die(); 
?>