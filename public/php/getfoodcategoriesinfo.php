<?php
//Access: Authenticated Users
//Purpose: Collect food category info

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['numLang']) && isset($_POST['limit']) && isset($_POST['offset']) && isset($_POST['search'])) {
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }
            $numLang = filter_var($_POST['numLang'], FILTER_SANITIZE_NUMBER_INT);
            $searchs = $_POST['search'];
            $search = "%$searchs%";
            $limits = filter_var($_POST['limit'], FILTER_SANITIZE_NUMBER_INT);
            $offset = filter_var($_POST['offset'], FILTER_SANITIZE_NUMBER_INT);

            include 'connect.php';

            if(!preg_match(Numeric(), $id) || !preg_match(Numeric(), $numLang) || !preg_match(Numeric(), $limits) || !preg_match(Numeric(), $offset)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {   
                $query = $con->prepare("SELECT `foodcategory`.`id` as `categoryValue`, `translationfoodcategory`.`translationFoodCategory` as `category`
                                        FROM `foodcategory`
                                        JOIN `translationfoodcategory` ON `translationfoodcategory`.`idFoodCategory` = `foodcategory`.`id`
                                        JOIN `language` ON `translationfoodcategory`.`idLang` = `language`.`id`
                                        WHERE `translationfoodcategory`.`idLang` = :idLang && `translationfoodcategory`.`translationFoodCategory`LIKE :search
                                        ORDER BY `translationfoodcategory`.`translationFoodCategory`
                                        LIMIT :offset, :limits");

                $query->bindValue(":search", $search);
                $query->bindValue(":offset", $offset, PDO::PARAM_INT);
                $query->bindValue(":limits", $limits, PDO::PARAM_INT);

                $query->bindValue(":idLang", $numLang);

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