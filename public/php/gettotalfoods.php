<?php
//Access: Everyone
//Purpose: Collect total categories food number

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['username']) && isset($_POST['numLang']) && isset($_POST['search'])) {
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

            include 'connect.php';

            if(!preg_match(AlphaNumeric(), $usernames) || !preg_match(Numeric(), $id) || !preg_match(Numeric(), $numLang)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $query = $con->prepare("SELECT `foods`.`id` FROM `foods` WHERE (`foods`.`belongCategory` = 1 || `foods`.`belongCategory` = 3)");

                if($query->execute()) {
                    $totalAllFood = $query->rowCount();

                    $query1 = $con->prepare("SELECT  `favourites`.`id` FROM `favourites` WHERE `favourites`.`idUser` = :id");

                    $query1->bindValue(":id", $id);

                    if($query1->execute()) {
                        $totalFavouriteFood = $query1->rowCount();

                        $query2 = $con->prepare("SELECT `createdfood`.`id` FROM `createdfood` WHERE `createdfood`.`idUser` = :id");

                        $query2->bindValue(":id", $id);
                        
                        if($query2->execute()) {
                            $totalCreatedFood = $query2->rowCount();

                            $query3 = $con->prepare("SELECT `dailyeatings`.`idFood` FROM `dailyeatings` WHERE `dailyeatings`.`idUser` = :id GROUP BY `dailyeatings`.`idFood`");
            
                            $query3->bindValue(":id", $id);

                            if($query3->execute()) {
                                $totalRecentFood = $query3->rowCount();
                                echo json_encode(['status' => 'ok', 'data' => ['totalAllFood' => $totalAllFood, 'totalFavouriteFood' => $totalFavouriteFood, 'totalCreatedFood' => $totalCreatedFood, 'totalRecentFood' => $totalRecentFood]]);
                            } else {
                                echo json_encode(['status' => 'error', 'data' => 'false2']);
                            }
                            die();
                        } else {
                            echo json_encode(['status' => 'error', 'data' => 'false4']);
                        }
                        die();
                    } else {
                        echo json_encode(['status' => 'error', 'data' => 'false6']);
                    }
                    die();
                } else {
                    echo json_encode(['status' => 'error', 'data' => 'false7']);
                }
                die();
            }
            die();
        } else {
            echo json_encode(['status' => 'error', 'data' => 'false8']);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>