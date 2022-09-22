<?php
//Access: Everyone
//Purpose: Collect all fat percentage info

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';
    
    if(isApiToken()) {
        if(isset($_POST['idLang']) && isset($_POST['limit']) && isset($_POST['offset'])) {
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }
            $idLang = filter_var($_POST['idLang'], FILTER_SANITIZE_NUMBER_INT);
            $limits = filter_var($_POST['limit'], FILTER_SANITIZE_NUMBER_INT);
            $offset = filter_var($_POST['offset'], FILTER_SANITIZE_NUMBER_INT);

            include 'connect.php';
            if(!preg_match(Numeric(), $id) || !preg_match(Numeric(), $idLang) || !preg_match(Numeric(), $limits) || !preg_match(Numeric(), $offset)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {        
                $query = $con->prepare("SELECT `waterpercentage`.`id` as `idRegister`, `waterpercentage`.`waterPercentage` as `number`, `waterpercentage`.`waterDate` as `date`
                                        FROM `waterpercentage`
                                        WHERE `waterpercentage`.`idUser` = :idUser
                                        ORDER BY `waterpercentage`.`waterDate` DESC
                                        LIMIT :offset, :limits");

                $query->bindValue(":idUser", $id);
                $query->bindValue(":offset", $offset, PDO::PARAM_INT);
                $query->bindValue(":limits", $limits, PDO::PARAM_INT);

                if($query->execute()) {
                    $row = $query->fetchAll(PDO::FETCH_ASSOC);
                    if(!empty($row)) {
                        echo json_encode(['status' => 'ok', 'data' => $row]);
                    } else {
                        echo json_encode(['status' => 'ok', 'data' => []]);
                    }
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