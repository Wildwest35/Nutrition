<?php
//Access: Authenticated Users
//Purpose: Collect total number elements of the "Admin Panel" categories

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);

        include 'connect.php';

        if(!preg_match(Numeric(), $id)) {
            echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
        } else {
            $query = $con->prepare("SELECT  `users`.`id` FROM `users`");

            if($query->execute()) {
                $countUser = $query->rowCount();
                
                $query1 = $con->prepare("SELECT `foods`.`id` FROM `foods` WHERE `foods`.`belongCategory` = 1 || `foods`.`belongCategory` = 3");

                if($query1->execute()) {
                    $countFood = $query1->rowCount();

                    $query2 = $con->prepare("SELECT `foods`.`id` FROM `foods` WHERE `foods`.`belongCategory` = 2 || `foods`.`belongCategory` = 3");
                    
                    if($query2->execute()) {
                        $countCreatedFood = $query2->rowCount();

                        $query3 = $con->prepare("SELECT `foodcategory`.`id` FROM `foodcategory`");

                        if($query3->execute()) {
                            $countFoodCategory = $query3->rowCount();

                            $query4 = $con->prepare("SELECT `unitname`.`id` FROM `unitname`");

                            if($query4->execute()) {
                                $countUnit = $query4->rowCount();

                                $query5 = $con->prepare("SELECT `activationlink`.`id` FROM `activationlink`");

                                if($query5->execute()) {
                                    $countActivationLink = $query5->rowCount();

                                    $query6 = $con->prepare("SELECT `confirmnewemail`.`id` FROM `confirmnewemail`");

                                    if($query6->execute()) {
                                        $countConfirmEmail = $query6->rowCount();

                                        echo json_encode(['status' => 'ok', 'data' => ['totalUsers' => $countUser, 'totalFoods' => $countFood, 'totalCreatedFoods' => $countCreatedFood, 'totalFoodCategories' => $countFoodCategory, 'totalUnits' => $countUnit, 'totalActivationLinks' => $countActivationLink, 'totalConfirmNewEmails' => $countConfirmEmail]]);
                                    } else {
                                        echo json_encode(['status' => 'error', 'data' => false]);
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
                        } else {
                            echo json_encode(['status' => 'error', 'data' => false]);
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
?>