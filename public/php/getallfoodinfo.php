<?php
//Access: Everyone
//Purpose: Collect all food info

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['username']) && isset($_POST['numLang']) && isset($_POST['search']) && isset($_POST['limit']) && isset($_POST['offset'])) {
            $usernames = filter_var($_POST['username'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            if(isset($_SESSION['nameUser'])) {
                $usernames = $_SESSION['nameUser'];
            }
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

            if(!preg_match(AlphaNumeric(), $usernames) || !preg_match(Numeric(), $id) || !preg_match(Numeric(), $numLang) || !preg_match(Numeric(), $limits) || !preg_match(Numeric(), $offset)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $query = $con->prepare("SELECT `foods`.`id` as `idFood`, `translationfoodname`.`translationFoodName` as `foodName`, `foods`.`imgPath` as `imgPath`, `foods`.`imgName` as `imgName`, `foods`.`imgHash` as `imgHash`, `translationfoodcategory`.`translationFoodCategory` as `category`, `translationunitname`.`translationUnitName` as `unitName`, `foods`.`portion` as `portion`, `foods`.`calories` as `calories`, `foods`.`protein` as `protein`, `foods`.`carb` as `carb`, `foods`.`fat` as `fat`, `foods`.`fiber` as `fiber`, `foods`.`saturated` as `saturated`, `foods`.`unsaturated` as `unsaturated`, `foods`.`sugar` as `sugar`, `foods`.`bitamins` as `bitamins`
                                        FROM `foods`
                                        JOIN `foodnames` ON `foods`.`idFoodName` = `foodnames`.`id`
                                        JOIN `foodcategory` ON `foods`.`idFoodCategory` = `foodcategory`.`id`
                                        JOIN `unitname` ON `foods`.`idUnitName` = `unitname`.`id`
                                        JOIN `translationfoodname` ON `translationfoodname`.`idFoodName` = `foodnames`.`id`
                                        JOIN `translationfoodcategory` ON `translationfoodcategory`.`idFoodCategory` = `foodcategory`.`id`
                                        JOIN `translationunitname` ON `translationunitname`.`idUnitName` = `unitname`.`id`
                                        JOIN `language` ON `translationfoodname`.`idLang` = `language`.`id`
                                        WHERE `translationfoodname`.`idLang` = :idLang && `translationfoodcategory`.`idLang` = :idLang1 && `translationunitname`.`idLang` = :idLang2 && (`foods`.`belongCategory` = 1 || `foods`.`belongCategory` = 3) && `translationfoodname`.`translationFoodName` LIKE :search
                                        ORDER BY `translationfoodname`.`translationFoodName`
                                        LIMIT :offset, :limits");


                $query->bindValue(":idLang", $numLang);
                $query->bindValue(":idLang1", $numLang);
                $query->bindValue(":idLang2", $numLang);
                $query->bindValue(":search", $search);
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
                    echo json_encode(['status' => 'error', 'data' => 'false2']);
                }
                die();
            }
            die();
        } else {
            echo json_encode(['status' => 'error', 'data' => 'false1']);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>