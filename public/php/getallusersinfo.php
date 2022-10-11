<?php
//Access: Authenticated Users
//Purpose: Collect all personal info of all users

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['limit']) && isset($_POST['offset']) && isset($_POST['search'])) {
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            $searchs = $_POST['search'];
            $search = "%$searchs%";
            $limits = filter_var($_POST['limit'], FILTER_SANITIZE_NUMBER_INT);
            $offset = filter_var($_POST['offset'], FILTER_SANITIZE_NUMBER_INT);

            include 'connect.php';
            
            if(!preg_match(Numeric(), $id) || !preg_match(Numeric(), $limits) || !preg_match(Numeric(), $offset)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $query = $con->prepare("SELECT `users`.`username`, `users`.`email`, `users`.`isConfirmAccount`, `users`.`sex`, `users`.`age`, `users`.`weights`, `users`.`height`, `users`.`isIncreaseWeight`, `users`.`requestedWeight`, `users`.`exercise`, `users`.`kilos`, `users`.`id` 
                                        FROM `users`
                                        WHERE `users`.`username` LIKE :search || `users`.`email` LIKE :search1
                                        ORDER BY `users`.`username` ASC
                                        LIMIT :offset, :limits");

                $query->bindValue(":search", $search);
                $query->bindValue(":search1", $search);
                $query->bindValue(":offset", $offset, PDO::PARAM_INT);
                $query->bindValue(":limits", $limits, PDO::PARAM_INT);

                if($query->execute()) {
                    $row = $query->fetchall(PDO::FETCH_ASSOC);
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