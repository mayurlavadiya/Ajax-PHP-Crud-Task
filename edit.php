<?php

include('dbconnection.php');
// $_server - request for GET & POST 
$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true); // if  give true than give associate array
$id = $mydata['dd'];

// Retrieve Data

$sql = "SELECT * FROM student WHERE id = {$id}";
$result = $con->query($sql);
$row = $result->fetch_assoc();

// Returning JSON Format Data as Response to AJAX call
echo json_encode($row);
    
?>