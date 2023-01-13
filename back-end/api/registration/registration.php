<?php

//start session
session_start();

// Connect to the database
$host = "localhost";
$username = "root";
$password = "";
$dbname = "db1";

//connect to the database
$conn = mysqli_connect($host, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

//check if the request method is POST
if($_SERVER["REQUEST_METHOD"] == "POST") {
    //get the form data
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    //hash the password
    $password = password_hash($password, PASSWORD_DEFAULT);

    //prepare the query
    $query = $conn->prepare("INSERT INTO users (username, password, email) VALUES (?,?,?)");
    $query->bind_param("sss", $username, $password, $email);
    if($query->execute()){
        //user registered
        $response = array(
            "status" => "success",
            "message" => "User registered successfully"
        );
        header("Content-Type: application/json");
        echo json_encode($response);
    }else{
        //user registration failed
        $response = array(
            "status" => "error",
            "message" => "User registration failed"
        );
        header("Content-Type: application/json");
        echo json_encode($response);
    }
}

?>
