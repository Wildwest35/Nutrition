<?php
//Access: Authenticated Users
//Purpose: User add or update water percentage register depents on the previous state from "Measurements"

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['registerDate']) && isset($_POST['waterPercentageValue'])) {
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }
            $registerDate = $_POST['registerDate'];
            $waterPercentageValue = $_POST['waterPercentageValue'];

            include 'connect.php';

            if(!preg_match(Numeric(), $id) || !preg_match(Numeric(), $waterPercentageValue) || !is_date_valid($registerDate)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $query = $con->prepare("SELECT `waterpercentage`.`waterPercentage`
                                        FROM `waterpercentage`
                                        WHERE `waterpercentage`.`idUser` = :idUser && `waterpercentage`.`waterDate` = :waterDate");

                $query->bindValue(":idUser", $id);
                $query->bindValue(":waterDate", $registerDate);

                if($query->execute()) {
                    $row = $query->fetch(PDO::FETCH_ASSOC);
                    if(!empty($row)) {
                        $query1 = $con->prepare("UPDATE `waterpercentage` SET `waterpercentage`.`waterPercentage` = :waterPercentageValue WHERE `waterpercentage`.`idUser` = :idUser && `waterpercentage`.`waterDate` = :waterDate");
            
                        $query1->bindValue(':waterPercentageValue', $waterPercentageValue);
                        $query1->bindValue(':idUser', $id);
                        $query1->bindValue(':waterDate', $registerDate);
            
                        if($query1->execute()) {
                            echo json_encode(['status' => 'ok', 'data' => true]);
                        } else {
                            echo json_encode(['status' => 'error', 'data' => 'false2']);
                        }
                    } else {
                        $query2 = $con->prepare("INSERT INTO `waterpercentage`(idUser, `waterPercentage`, waterDate) VALUES(:idUser, :waterPercentageValue, :waterDate)");

                        $query2->bindParam(':idUser', $id);
                        $query2->bindParam(':waterPercentageValue', $waterPercentageValue);
                        $query2->bindParam(':waterDate', $registerDate);

                        if($query2->execute()) {
                            echo json_encode(['status' => 'ok', 'data' => true]);
                        } else {
                            echo json_encode(['status' => 'error', 'data' => 'false3']);
                        }
                        die();
                    }
                } else {
                    echo json_encode(['status' => 'error', 'data' => 'false1']);
                }
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