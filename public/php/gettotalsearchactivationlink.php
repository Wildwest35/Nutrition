<?php
//Access: Everyone
//Purpose: Collect total search activation link

    @session_start();
    include 'corsAccess.php'; 
    include 'checkInput.php';

    if(isApiToken()) {
        if(isset($_POST['search'])) {
            $id = filter_var($_SESSION['username'], FILTER_SANITIZE_NUMBER_INT);
            $searchs = $_POST['search'];
            $search = "%$searchs%";

            include 'connect.php';

            if(!preg_match(Numeric(), $id)) {
                echo json_encode(['status' => 'error', 'data' => 'Error Code: #704']);
            } else {
                $query = $con->prepare("SELECT `users`.`username`
                                        FROM `activationlink`
                                        JOIN `users` ON `activationlink`.`idUser` = `users`.`id`
                                        WHERE `users`.`username` LIKE :search");

                $query->bindValue(":search", $search);

                if($query->execute()) {
                    $countActivationLink = $query->rowCount();
                    echo json_encode(['status' => 'ok', 'data' => $countActivationLink]);
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