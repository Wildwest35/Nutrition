<?php
//Access: Everyone
//Purpose: Collect all Daily Stat info

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['fullDate'])) {
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }
            $date = $_POST['fullDate'];
            date_default_timezone_set("Europe/Athens");
            $currentDate = date("Y-m-d");
            $limits = filter_var($_POST['limit'], FILTER_SANITIZE_NUMBER_INT);
            $offset = filter_var($_POST['offset'], FILTER_SANITIZE_NUMBER_INT);
            $calories = 0;
            $protein = 0;
            $carb = 0;
            $fat = 0;
            $water = 0;
            $note = '';

            include 'connect.php';
            
            if(!preg_match(Numeric(), $id)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
                die();
            } else {
                $query = $con->prepare("SELECT `dailysummaries`.`calories` as startCalories, `dailysummaries`.`protein` as startProtein, `dailysummaries`.`carb` as startCarb, `dailysummaries`.`fat` as startFat, `dailyconsumptiongoals`.`calories`, `dailyconsumptiongoals`.`protein`, `dailyconsumptiongoals`.`carb`, `dailyconsumptiongoals`.`fat`, `dailysummaries`.`fiber` as startFiber, `dailysummaries`.`saturated` as startSaturated, `dailysummaries`.`unsaturated` as startUnsaturated, `dailysummaries`.`sugar` as startSugar, `dailysummaries`.`bitamins` as startBitamins 
                                        FROM `dailysummaries`
                                        JOIN `dailyconsumptiongoals` ON `dailyconsumptiongoals`.`id` = `dailysummaries`.`idDailyConsumptionGoals`
                                        JOIN `users` ON `dailyconsumptiongoals`.`idUser` = `users`.`id`
                                        WHERE `users`.`id` = :id && `dailysummaries`.`dailySummariesDate` >= :dailySummariesDate && `dailysummaries`.`dailySummariesDate` <= :currentDate
                                        ORDER BY `dailysummaries`.`dailySummariesDate` DESC
                                        LIMIT :offset, :limits");

                $query->bindValue(":id", $id);
                $query->bindValue(":dailySummariesDate", $date);
                $query->bindValue(":currentDate", $currentDate);
                $query->bindValue(":offset", $offset, PDO::PARAM_INT);
                $query->bindValue(":limits", $limits, PDO::PARAM_INT);

                if($query->execute()) {
                    $row = $query->fetchAll(PDO::FETCH_ASSOC);

                    if(!empty($row)) {
                        echo json_encode(['status' => 'ok', 'data' => $row]);
                    } else {
                        echo json_encode(['status' => 'error', 'data' => 'false1']);
                    }
                    die();
                } else {
                    echo json_encode(['status' => 'error', 'data' => 'false2']);
                }
                die();
            }
            die();
        } else {
            echo json_encode(['status' => 'error', 'data' => 'false3']);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>