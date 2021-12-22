<?php
    @session_start();
    header('Content-type: application/json');
    //header("Access-Control-Allow-Origin: *");
    include 'corsAccess.php';

    if(isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['sex']) && isset($_POST['age']) && isset($_POST['height']) && isset($_POST['weight']) && isset($_POST['isweight']) && isset($_POST['requestedWeight'])) {    
        include 'connect.php';

        date_default_timezone_set("Europe/Athens");
        $date = date("Y-m-d H:i:s");
        $username = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $pass = filter_var($_POST['password'], FILTER_SANITIZE_STRING);
        //$repeatpassword = filter_var($_POST['repeatpassword'], FILTER_SANITIZE_STRING);
        $sex = filter_var($_POST['sex'], FILTER_SANITIZE_NUMBER_INT);
        $age = filter_var($_POST['age'], FILTER_SANITIZE_NUMBER_INT);
        $height = filter_var($_POST['height'], FILTER_SANITIZE_NUMBER_INT);
        $weights = filter_var($_POST['weight'], FILTER_SANITIZE_NUMBER_FLOAT);
        $isweight = filter_var($_POST['isweight'], FILTER_SANITIZE_NUMBER_INT);
        $requestedweight = filter_var($_POST['requestedWeight'], FILTER_SANITIZE_NUMBER_FLOAT);
        $isconfirmaccount = 0;
        $category = 1;
        
        $hash = password_hash($pass, PASSWORD_DEFAULT);

        $query = $con->prepare("INSERT INTO users(category, username, email, pass, sex, age, weights, height, isIncreaseWeight, requestedWeight, dateCreated, isConfirmAccount) VALUES(:category, :username, :email, :pass, :sex, :age, :weights, :height, :isIncreaseWeight, :requestedWeight, :dateCreated, :isConfirmAccount)");

        $query->bindParam(':category', $category);
        $query->bindParam(':username', $username);
        $query->bindParam(':email', $email);
        $query->bindParam(':pass', $hash);
        $query->bindParam(':sex', $sex);
        $query->bindParam(':age', $age);
        $query->bindParam(':weights', $weights);
        $query->bindParam(':height', $height);
        $query->bindParam(':isIncreaseWeight', $isweight);
        $query->bindParam(':requestedWeight', $requestedweight);
        $query->bindParam(':dateCreated', $date);
        $query->bindParam(':isConfirmAccount', $isconfirmaccount);
                          
        if($query->execute()) {
            echo json_encode(["status" => 'ok', "data" => true]); 
        } else {
            //var_dump($query->errorInfo());
            echo json_encode(["status" => 'error', "data" => false]);  
        }
    }     
?>