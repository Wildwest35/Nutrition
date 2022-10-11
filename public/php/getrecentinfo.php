<?php
//Access: Authenticated Users
//Purpose: Collect all user's recent food info

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
                $query = $con->prepare("SELECT ANY_VALUE(`dailyeatings`.`idFood`) as `idFood`, ANY_VALUE(`translationunitname`.`translationUnitName`) as `unitName`, ANY_VALUE(`dailyeatings`.`isFavourite`) as `isFavourite`, ANY_VALUE(`translationfoodname`.`translationFoodName`) as `foodName`, ANY_VALUE(`translationfoodcategory`.`translationFoodCategory`) as `category`, ANY_VALUE(`foods`.`imgPath`) as `imgPath`, ANY_VALUE(`foods`.`imgName`) as `imgName`, ANY_VALUE(`foods`.`imgHash`) as `imgHash`, ANY_VALUE(`foods`.`portion`) as `portion`, ANY_VALUE(`foods`.`calories`) as `calories`, ANY_VALUE(`foods`.`protein`) as `protein`, ANY_VALUE(`foods`.`carb`) as `carb`, ANY_VALUE(`foods`.`fat`) as `fat`, ANY_VALUE(`foods`.`fiber`) as `fiber`, ANY_VALUE(`foods`.`saturated`) as `saturated`, ANY_VALUE(`foods`.`unsaturated`) as `unsaturated`, ANY_VALUE(`foods`.`sugar`) as `sugar`, ANY_VALUE(`foods`.`bitamins`) as `bitamins`
                                        FROM `dailyeatings`
                                        JOIN `foods` ON `dailyeatings`.`idFood` = `foods`.`id`
                                        JOIN `foodnames` ON `foods`.`idFoodName` = `foodnames`.`id`
                                        JOIN `foodcategory` ON `foods`.`idFoodCategory` = `foodcategory`.`id`
                                        JOIN `unitname` ON `foods`.`idUnitName` = `unitname`.`id`
                                        JOIN `translationfoodname` ON `translationfoodname`.`idFoodName` = `foodnames`.`id`
                                        JOIN `translationfoodcategory` ON `translationfoodcategory`.`idFoodCategory` = `foodcategory`.`id`
                                        JOIN `translationunitname` ON `translationunitname`.`idUnitName` = `unitname`.`id`
                                        JOIN `language` ON `translationfoodname`.`idLang` = `language`.`id`
                                        WHERE `dailyeatings`.`idUser` = :id && `translationfoodname`.`idLang` = :idLang && `translationfoodcategory`.`idLang` = :idLang1 && `translationunitname`.`idLang` = :idLang2
                                        && (`translationfoodname`.`translationFoodName` LIKE :search || `translationfoodcategory`.`translationFoodCategory` LIKE :search1 || `translationunitname`.`translationUnitName` LIKE :search2 || `foods`.`portion` LIKE :search3)
                                        GROUP BY `translationfoodname`.`translationFoodName`
                                        ORDER BY `translationfoodname`.`translationFoodName`
                                        LIMIT :offset, :limits");

                $query->bindValue(":id", $id);
                $query->bindValue(":idLang", $numLang);
                $query->bindValue(":idLang1", $numLang);
                $query->bindValue(":idLang2", $numLang);
                $query->bindValue(":search", $search);
                $query->bindValue(":search1", $search);
                $query->bindValue(":search2", $search);
                $query->bindValue(":search3", $search); 
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