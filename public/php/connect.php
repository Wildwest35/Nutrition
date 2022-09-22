<?php	
//Access: Everyone
//Purpose: Connect with database

    $hostname = '127.0.0.1';
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