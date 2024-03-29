<?php
//Access: Authenticated Users
//Purpose: Collect total number elements in "Daily Stats"

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
            $totalDailyStats = 0;

            include 'connect.php';

            if(!preg_match(Numeric(), $id)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $query = $con->prepare("SELECT `dailysummaries`.`calories` as totalDailyStats
                                        FROM `dailysummaries`
                                        JOIN `dailyconsumptiongoals` ON `dailyconsumptiongoals`.`id` = `dailysummaries`.`idDailyConsumptionGoals`
                                        JOIN `users` ON `dailyconsumptiongoals`.`idUser` = `users`.`id`
                                        WHERE `users`.`id` = :id && `dailysummaries`.`dailySummariesDate` >= :dailySummariesDate");

                $query->bindValue(":id", $id);
                $query->bindValue(":dailySummariesDate", $date);

/*                 $query = $con->prepare("SELECT `dailyeatings`.`calories` as totalDailyStats
                                        FROM `dailyeatings`
                                        WHERE `dailyeatings`.`idUser` = :id && `dailyeatings`.`dailyEatingsDate` >= :dailyEatingsDate
                                        GROUP BY `dailyeatings`.`dailyEatingsDate`");

                $query->bindValue(":id", $id);
                $query->bindValue(":dailyEatingsDate", $date); */

                if($query->execute()) {
                    $row = $query->rowCount();
                    
                    echo json_encode(['status' => 'ok', 'data' => $row]);
                } else {
                    echo json_encode(['status' => 'error', 'data' => 'false6']);
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