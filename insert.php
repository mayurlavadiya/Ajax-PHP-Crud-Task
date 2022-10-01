<?php
    include('dbconnection.php');

    /* 
    1. stripslashes function cn be used to clean up data retrieved from database or from an HTML Form.

    2. php:input  - This is aread only stream that allows us to read raw data from the request body. 
        It returns all the raw data after the HTTP-headers of the request, regardless of the content type

    3. json_decode  - It taes JSON string and converts it into a PHP object or array, if true 
    then associative array

    */

    $data = stripslashes(file_get_contents("php://input"));
    $mydata = json_decode($data, true); // if  give true than give associate array
    $name = $mydata['name'];
    $email = $mydata['email'];
    $password = $mydata['password'];

    // insert data into database
    if(!empty($name) && !empty($email) && !empty($password))
    {
        $sql = "INSERT INTO student (name, email, password) VALUES ('$name','$email','$password')";
        if($con->query($sql) == TRUE){
            echo "Student details added successfully !";
        }else{
            echo "Unable to add student details !";
        }
    }else{
        echo "Please enter all details !";
    }


?>