<?php
//Access: Authenticated Users
//Purpose: Collect total search units

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['search'])) {
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            $numLang = filter_var($_POST['numLang'], FILTER_SANITIZE_NUMBER_INT);
            $searchs = $_POST['search'];
            $search = "%$searchs%";

            include 'connect.php';

            if(!preg_match(Numeric(), $id)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $query = $con->prepare("SELECT `translationunitname`.`translationUnitName`
                                        FROM `unitname`
                                        JOIN `translationunitname` ON `translationunitname`.`idUnitName` = `unitname`.`id`
                                        WHERE `translationunitname`.`idLang` = :idLang && `translationunitname`.`translationUnitName` LIKE :search");
                
                $query->bindValue(":idLang", $numLang);
                $query->bindValue(":search", $search);

                if($query->execute()) {
                    $countUnit = $query->rowCount();
                    echo json_encode(['status' => 'ok', 'data' => $countUnit]);
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