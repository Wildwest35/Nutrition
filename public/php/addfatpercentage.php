<?php
//Access: Authenticated Users
//Purpose: User add or update fat percentage register depents on the previous state from "Measurements"

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['registerDate']) && isset($_POST['fatPercentageValue'])) {
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }
            $registerDate = $_POST['registerDate'];
            $fatPercentageValue = $_POST['fatPercentageValue'];

            include 'connect.php';

            if(!preg_match(Numeric(), $id) || !preg_match(Numeric(), $fatPercentageValue) || !is_date_valid($registerDate)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $query = $con->prepare("SELECT `fatpercentage`.`fatPercentage`
                                        FROM `fatpercentage`
                                        WHERE `fatpercentage`.`idUser` = :idUser && `fatpercentage`.`fatDate` = :fatDate");

                $query->bindValue(":idUser", $id);
                $query->bindValue(":fatDate", $registerDate);

                if($query->execute()) {
                    $row = $query->fetch(PDO::FETCH_ASSOC);
                    if(!empty($row)) {
                        $query1 = $con->prepare("UPDATE `fatpercentage` SET `fatpercentage`.`fatPercentage` = :fatPercentageValue WHERE `fatpercentage`.`idUser` = :idUser && `fatpercentage`.`fatDate` = :fatDate");
            
                        $query1->bindValue(':fatPercentageValue', $fatPercentageValue);
                        $query1->bindValue(':idUser', $id);
                        $query1->bindValue(':fatDate', $registerDate);
            
                        if($query1->execute()) {
                            echo json_encode(['status' => 'ok', 'data' => true]);
                        } else {
                            echo json_encode(['status' => 'error', 'data' => 'false2']);
                        }
                    } else {
                        $query2 = $con->prepare("INSERT INTO `fatpercentage`(idUser, `fatPercentage`, fatDate) VALUES(:idUser, :fatPercentageValue, :fatDate)");

                        $query2->bindParam(':idUser', $id);
                        $query2->bindParam(':fatPercentageValue', $fatPercentageValue);
                        $query2->bindParam(':fatDate', $registerDate);

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