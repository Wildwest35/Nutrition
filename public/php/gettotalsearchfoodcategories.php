<?php
//Access: Everyone
//Purpose: Collect total search created foods

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
                $query = $con->prepare("SELECT `translationfoodcategory`.`translationFoodCategory`
                                        FROM `foodcategory`
                                        JOIN `translationfoodcategory` ON `translationfoodcategory`.`idFoodCategory` = `foodcategory`.`id`
                                        WHERE `translationfoodcategory`.`idLang` = :idLang && `translationfoodcategory`.`translationFoodCategory` LIKE :search");
                
                $query->bindValue(":idLang", $numLang);
                $query->bindValue(":search", $search);

                if($query->execute()) {
                    $countFoodCategory = $query->rowCount();
                    echo json_encode(['status' => 'ok', 'data' => $countFoodCategory]);
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