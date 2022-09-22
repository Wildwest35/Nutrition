<?php
//Access: Everyone
//Purpose: Collect all food info

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['username']) && isset($_POST['numLang'])) {
            $usernames = filter_var($_POST['username'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            if(isset($_SESSION['nameUser'])) {
                $usernames = $_SESSION['nameUser'];
            }
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            if(isset($_SESSION['idUser'])) {
                $id = filter_var($_SESSION['idUser'], FILTER_SANITIZE_NUMBER_INT);
            }
            $numLang = filter_var($_POST['numLang'], FILTER_SANITIZE_NUMBER_INT);

            if(isset($_POST['fullDate'])) {
                $date = $_POST['fullDate'];
            } else {
                $date = date("Y-m-d");
            }

            include 'connect.php';

            if(!preg_match(AlphaNumeric(), $usernames) || !preg_match(Numeric(), $id) || !preg_match(Numeric(), $numLang)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {                      
                $query = $con->prepare("SELECT `foods`.`calories` as `defaultCalories`, `foods`.`protein` as `defaultProtein`, `foods`.`fat` as `defaultFat`, `foods`.`fiber` as `defaultFiber`, `foods`.`carb` as `defaultCarb`, `foods`.`saturated` as `defaultSaturated`, `foods`.`unsaturated` as `defaultUnsaturated`, `foods`.`sugar` as `defaultSugar`, `foods`.`bitamins` as `defaultBitamins`, `foods`.`portion` as `defaultPortion`,`dailyeatings`.`id`, `translationunitname`.`translationUnitName` as `unitName`, `dailyeatings`.`isFavourite`, `dailyeatings`.`idFood`, `translationfoodname`.`translationFoodName` as foodName, `dailyeatings`.`idNameOfDailyMeals`, `foods`.`imgPath` as `imgPath`, `foods`.`imgName` as `imgName`, `foods`.`imgHash` as `imgHash`, `dailyeatings`.`portion`, `dailyeatings`.`calories`, `dailyeatings`.`protein`, `dailyeatings`.`carb`, `dailyeatings`.`fat`, `dailyeatings`.`fiber`, `dailyeatings`.`saturated`, `dailyeatings`.`unsaturated`, `dailyeatings`.`sugar`, `dailyeatings`.`bitamins` 
                                        FROM `dailyeatings`
                                        JOIN `users` ON `dailyeatings`.`idUser` = `users`.`id`
                                        JOIN `foods` ON `dailyeatings`.`idFood` = `foods`.`id`
                                        JOIN `nameofdailymeals` ON `dailyeatings`.`idNameOfDailyMeals` = `nameofdailymeals`.`id`
                                        JOIN `foodnames` ON `foods`.`idFoodName` = `foodnames`.`id`
                                        JOIN `foodcategory` ON `foods`.`idFoodCategory` = `foodcategory`.`id`
                                        JOIN `unitname` ON `foods`.`idUnitName` = `unitname`.`id`
                                        JOIN `translationfoodname` ON `translationfoodname`.`idFoodName` = `foodnames`.`id`
                                        JOIN `translationfoodcategory` ON `translationfoodcategory`.`idFoodCategory` = `foodcategory`.`id`
                                        JOIN `translationunitname` ON `translationunitname`.`idUnitName` = `unitname`.`id`
                                        JOIN `language` ON `translationfoodname`.`idLang` = `language`.`id`
                                        WHERE `users`.`username` = :username && `users`.`id` = :id  && `translationfoodname`.`idLang` = :idLang && `translationfoodcategory`.`idLang` = :idLang1 && `translationunitname`.`idLang` = :idLang2 && `dailyeatings`.`dailyEatingsDate` = :dailyEatingsDate");

                $query->bindValue(":username", $usernames);
                $query->bindValue(":id", $id);
                $query->bindValue(":dailyEatingsDate", $date);
                $query->bindValue(":idLang", $numLang);
                $query->bindValue(":idLang1", $numLang);
                $query->bindValue(":idLang2", $numLang);

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