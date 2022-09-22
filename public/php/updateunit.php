<?php
//Access: Everyone
//Purpose: Update unit

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['idUnit']) && isset($_POST['idLang']) && isset($_POST['nameUnit'])) {
            include 'connect.php';

            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            $idLang = filter_var($_POST['idLang'], FILTER_SANITIZE_NUMBER_INT);
            $nameUnit = $_POST['nameUnit'];
            $idUnit = filter_var($_POST['idUnit'], FILTER_SANITIZE_NUMBER_INT);
        
            if(!preg_match(AlphaLatin(), $nameUnit) || !preg_match(Numeric(), $id) || !preg_match(Numeric(), $idLang) || !preg_match(Numeric(), $idUnit)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
                die();
            } else {
                $query = $con->prepare("UPDATE `translationunitname` 
                                        SET `translationunitname`.`translationUnitName` = :translationUnitName
                                        WHERE `translationunitname`.`idUnitName` = :idUnitName && `translationunitname`.`idLang` = :idLang");

                $query->bindValue(":translationUnitName", $nameUnit);
                $query->bindValue(":idUnitName", $idUnit);
                $query->bindValue(":idLang", $idLang);
            
                if($query->execute()) {
                    echo json_encode(['status' => 'ok', 'data' => true]);
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