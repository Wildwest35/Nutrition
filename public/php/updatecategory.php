<?php
//Access: Authenticated Users
//Purpose: Update the name of category food

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['idCategory']) && isset($_POST['idLang']) && isset($_POST['nameCategory'])) {
            include 'connect.php';

            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            $idLang = filter_var($_POST['idLang'], FILTER_SANITIZE_NUMBER_INT);
            $nameCategory = $_POST['nameCategory'];
            $idCategory = filter_var($_POST['idCategory'], FILTER_SANITIZE_NUMBER_INT);
        
            if(!preg_match(AlphaLatin(), $nameCategory) || !preg_match(Numeric(), $id) || !preg_match(Numeric(), $idLang) || !preg_match(Numeric(), $idCategory)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
                die();
            } else {
                $query = $con->prepare("UPDATE `translationfoodcategory` 
                                        SET `translationfoodcategory`.`translationFoodCategory` = :translationFoodCategory
                                        WHERE `translationfoodcategory`.`idFoodCategory` = :idFoodCategory && `translationfoodcategory`.`idLang` = :idLang");

                $query->bindValue(":translationFoodCategory", $nameCategory);
                $query->bindValue(":idFoodCategory", $idCategory);
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