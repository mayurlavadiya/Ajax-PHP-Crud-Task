<?php

include('dbconnection.php');

// Retrieve Student Information

$sql = "SELECT * FROM student";
$result = $con->query($sql);
if($result->num_rows > 0){
    $data = array();
    while ($row = $result-> fetch_assoc()){
        $data[] = $row;
    }
}

// Returning JSON Format Data as Response to AJAX call
echo json_encode($data); //json ma htu e bdhu console log ma dekhadse

?>