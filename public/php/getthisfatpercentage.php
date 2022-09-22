<?php
//Access: Everyone
//Purpose: Get one fat percentage register

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['registerDate'])) {
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }
            $registerDate = $_POST['registerDate'];

            include 'connect.php';

            if(!preg_match(Numeric(), $id) || !is_date_valid($registerDate)) {
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
                        echo json_encode(['status' => 'ok', 'data' => $row['fatPercentage']]);
                    } else {
                        echo json_encode(['status' => 'ok', 'data' => '']);
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