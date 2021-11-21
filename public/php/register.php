<?php
    @session_start();
    header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");

    var_dump($_POST['sex']);
    var_dump($_POST['age']);

    if(isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['repeatpassword']) && isset($_POST['sex']) && isset($_POST['age']) && isset($_POST['height']) && isset($_POST['weight']) && isset($_POST['isweight']) && isset($_POST['requestedWeight'])) {    
        include 'connect.php';

        date_default_timezone_set("Europe/Athens");
        $date = date("d-m-y H:i:s");
        var_dump(date("d-m-y H:i:s")); 

        $username = $_POST['username'];
        $email = $_POST['email'];
        $pass = $_POST['password'];
        $repeatpassword = $_POST['repeatpassword'];
        $sex = 0;//$_POST['sex'];
        $age = $_POST['age'];
        $height = $_POST['height'];
        $weights = $_POST['weight'];
        $isweight = $_POST['isweight'];
        $requestedweight = $_POST['requestedWeight'];
        $isconfirmaccount = 0;
        $category = 1;
        
        date_default_timezone_set("Europe/Athens");
        $date = date("d-m-y H:i:s");
        
        $query = $con->prepare("INSERT INTO users(category, username, email, pass, sex, age, weights, height, isIncreaseWeight, requestedWeight, dateCreated, isConfirmAccount) VALUES(:category, :username, :email, :pass, :sex, :age, :weights, :height, :isIncreaseWeight, :requestedWeight, :dateCreated, :isConfirmAccount)");

        $query->bindParam(':category', $category);
        $query->bindParam(':username', $username);
        $query->bindParam(':email', $email);
        $query->bindParam(':pass', $pass);
        $query->bindParam(':sex', $sex);
        $query->bindParam(':age', $age);
        $query->bindParam(':weights', $weights);
        $query->bindParam(':height', $height);
        $query->bindParam(':isIncreaseWeight', $isweight);
        $query->bindParam(':requestedWeight', $requestedweight);
        $query->bindParam(':dateCreated', $date);
        $query->bindParam(':isConfirmAccount', $isconfirmaccount);
                          
        if($query->execute()) {
            echo json_encode(['status' => 'ok', 'data' => true]); 
        } else {
            var_dump($query->errorInfo());
            echo json_encode(['status' => 'error', 'data' => false]); 
        }
    } 


/*    if(!isset($_SERVER["HTTPS"]) || $_SERVER["HTTPS"] != "on")
    {
        //Tell the browser to redirect to the HTTPS URL.
        header("Location: https://" . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"], true, 301);
        //Prevent the rest of the script from executing.
        exit;
    }
     if(strpos($_SERVER["HTTP_ORIGIN"], "javascript") == false) {
        header('Access-Control-Allow-Origin: '. $_SERVER['HTTP_HOST']);
    } */
    
?>