<?php	

    $hostname = '/zstorage/home/ece01121/mysql/run/mysql.sock';
	$username = 'root';
	$password = '';
	$database = 'nutrition';

	try {
		$con = new PDO("mysql:unix_socket=$hostname;dbname=$database;charset=utf8", $username, $password);
		
	} catch(PDOException $e) {
		print "Error!: ".$e->getMessage()."<br/>";
		die();
	}
?>