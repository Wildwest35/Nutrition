<?php	
    $hostname = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'nutrition';

	try	{
		$con = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);
	} catch(PDOException $e) {
		print "Error!: ".$e->getMessage()."<br/>";
		die();
	}
?>