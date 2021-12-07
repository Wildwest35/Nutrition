<?php
    @session_start();
    header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");
    
    if(isset($_POST['field']) && isset($_POST['table']) && isset($_POST['newVal'])) {
        include 'connect.php';

        $field = filter_var($_POST['field'], FILTER_SANITIZE_STRING);
        $table = filter_var($_POST['table'], FILTER_SANITIZE_STRING);
        $newVal = filter_var($_POST['newVal'], FILTER_SANITIZE_STRING);

        $query = $con->prepare("SELECT $field FROM $table WHERE $field = :$field");

        $query->bindValue(":$field", $newVal);

        if($query->execute()) {
            $row = $query->fetchAll(PDO::FETCH_ASSOC);

            if(!empty($row)) {
                if ($query->rowCount() > 0) {
                    echo json_encode(['status' => 'ok', 'data' => $row]);
                } else {
                    echo json_encode(['status' => 'error', 'data' => false]);
                }
            } else {
                echo json_encode(['status' => 'error', 'data' => false]);
            }
        }
    }
?>