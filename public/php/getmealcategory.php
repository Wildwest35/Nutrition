<?php
//Access: Authenticated Users
//Purpose: Save meal category to a session

    @session_start();
    include 'corsAccess.php';
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['mealCategory']) && isset($_POST['fulldate'])) {
            $mealCategory = filter_var($_POST['mealCategory'], FILTER_SANITIZE_NUMBER_INT);
            $fullDate = $_POST['fulldate'];
            $_SESSION['fulldate'] = $fullDate;
            include 'connect.php';
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);

            if(!preg_match(Numeric(), $id) || !preg_match(Numeric(), $mealCategory)) {
                $_SESSION['mealCategory'] = 0;
                echo json_encode(['status' => 'ok', 'data' => true]);
            } else {
                $_SESSION['mealCategory'] = $mealCategory;
                echo json_encode(['status' => 'ok', 'data' => true]);
            }
            die();
        } else {
            $_SESSION['mealCategory'] = 0;
            echo json_encode(['status' => 'ok', 'data' => true]);
        }
        die();
    } else {
        echo json_encode(['status' => 'error', 'data' => false]);
    }
    die();
?>