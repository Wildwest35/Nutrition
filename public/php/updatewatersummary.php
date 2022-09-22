<?php
//Access: Everyone
//Purpose: Update note

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['username']) && isset($_POST['newVal']) && isset($_POST['date'])) {
            $newVal = filter_var($_POST['newVal'], FILTER_SANITIZE_NUMBER_INT);
            $date = $_POST['date'];
            include 'connect.php';

            $username = filter_var($_POST['username'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            if(isset($_SESSION['nameUser'])) {
                $username = $_SESSION['nameUser'];
            }
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }

            if(!preg_match(AlphaNumeric(), $username) || !preg_match(Numeric(), $id) || !preg_match(Numeric(), $newVal)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
                die();
            } else {
                $query = $con->prepare("SELECT `dailyconsumptiongoals`.`id` 
                                        FROM `dailysummaries`
                                        JOIN `dailyconsumptiongoals` ON `dailyconsumptiongoals`.`id` = `dailysummaries`.`idDailyConsumptionGoals`
                                        WHERE `dailyconsumptiongoals`.`idUser` = :idUser");

                $query->bindValue(":idUser", $id);

                if($query->execute()) {
                    $row = $query->fetch(PDO::FETCH_ASSOC);

                    if(!empty($row)) {
                        $query1 = $con->prepare("UPDATE `dailysummaries` SET `dailysummaries`.`water` = :note WHERE `dailysummaries`.`idDailyConsumptionGoals` = :idDailyConsumptionGoals && `dailysummaries`.`dailySummariesDate` = :dailySummariesDate");
                    
                        $query1->bindValue(':note', $newVal);
                        $query1->bindValue(':idDailyConsumptionGoals', $row['id']);
                        $query1->bindValue(":dailySummariesDate", $date);
                        
                        if($query1->execute()) {
                            echo json_encode(['status' => 'ok', 'data' => true]);
                        } else {
                            echo json_encode(['status' => 'error', 'data' => '* Κάτι πήγε λάθος! Το νερό δεν άλλαξε!']);                       
                        }
                        die();
                    } else {
                        echo json_encode(['status' => 'error', 'data' => 'false1']);
                    }
                } else {
                    echo json_encode(['status' => 'error', 'data' => 'false2']);
                }
            }
            die();
        } else {
            echo json_encode(['status' => 'error', 'data' => '* Το πεδίο είναι κενό!']);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>