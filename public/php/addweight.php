<?php
//Access: Authenticated Users
//Purpose: User add or update weight register depents on the previous state from "Measurements"

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['registerDate']) && isset($_POST['weightValue'])) {
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }
            $registerDate = $_POST['registerDate'];
            $weightValue = $_POST['weightValue'];

            include 'connect.php';

            if(!preg_match(Numeric(), $id) || !preg_match(Numeric(), $weightValue) || !is_date_valid($registerDate)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $query = $con->prepare("SELECT `weight`.`weight`
                                        FROM `weight`
                                        WHERE `weight`.`idUser` = :idUser && `weight`.`weightDate` = :weightDate");

                $query->bindValue(":idUser", $id);
                $query->bindValue(":weightDate", $registerDate);

                if($query->execute()) {
                    $row = $query->fetch(PDO::FETCH_ASSOC);
                    if(!empty($row)) {
                        $query1 = $con->prepare("UPDATE `weight` SET `weight`.`weight` = :weightValue WHERE `weight`.`idUser` = :idUser && `weight`.`weightDate` = :weightDate");
            
                        $query1->bindValue(':weightValue', $weightValue);
                        $query1->bindValue(':idUser', $id);
                        $query1->bindValue(':weightDate', $registerDate);
            
                        if($query1->execute()) {
                            echo json_encode(['status' => 'ok', 'data' => true]);
                        } else {
                            echo json_encode(['status' => 'error', 'data' => 'false2']);
                        }
                    } else {
                        $query2 = $con->prepare("INSERT INTO `weight`(idUser, `weight`, weightDate) VALUES(:idUser, :weightValue, :weightDate)");

                        $query2->bindParam(':idUser', $id);
                        $query2->bindParam(':weightValue', $weightValue);
                        $query2->bindParam(':weightDate', $registerDate);

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