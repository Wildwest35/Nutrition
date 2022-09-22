<?php
//Access: Everyone
//Purpose: Delete created food

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['id'])) {
            $usernameId = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            $id = $_POST['id'];       
            
            include 'connect.php';

            if(!preg_match(Numeric(), $id) || !preg_match(Numeric(), $usernameId)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $query = $con->prepare("SELECT `foods`.`idFoodName` FROM `foods` WHERE `foods`.`id` = :id");

                $query->bindValue(":id", $id);

                if($query->execute()) {
                    $row = $query->fetch(PDO::FETCH_ASSOC);
                    if(!empty($row)) {
                        $query1 = $con->prepare("DELETE FROM `foodnames` WHERE `foodnames`.`id` = :id");

                        $query1->bindValue(":id", $row['idFoodName']);
                    
                        if($query1->execute()) {
                            echo json_encode(['status' => 'ok', 'data' => true]);
                        } else {
                            echo json_encode(['status' => 'error', 'data' => false]);
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