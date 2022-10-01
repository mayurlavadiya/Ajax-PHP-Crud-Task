<?php

include('dbconnection.php');
$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true); // if  give true than give associate array
$id = $mydata['dd'];

// Delete Student Information
if(!empty($id))
    {
        $sql = "DELETE FROM student WHERE id = {$id}";
        if($con->query($sql) == TRUE){
            echo "1";
        }else{
            echo "0";
        }
    }
    
?>