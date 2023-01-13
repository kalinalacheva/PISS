<?php

//start session
session_start();

  // Connect to the database
  $host = 'localhost'; // replace with your hostname
  $username = 'root'; // replace with your username
  $password = ''; // replace with your password
  $dbname = 'db1'; // replace with your database name


//connect to the database
$conn = new mysqli($host, $username, $password, $dbname);

//check for a post request
if($_SERVER["REQUEST_METHOD"] == "POST") {
    //get the form data
    $username = $_POST['username'];
    $password = $_POST['password'];

    //prepare the query
    $query = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $query->bind_param("s", $username);
    $query->execute();
    $result = $query->get_result();
    if($result->num_rows > 0){
        //user found
        $user = $result->fetch_assoc();
        if(password_verify($password, $user['password'])){
            //password is correct
            $_SESSION['username'] = $username;
            $response = array(
                "status" => "success",
                "message" => "User logged in successfully"
            );
            header("Content-Type: application/json");
            echo json_encode($response);
        }else{
            //password is incorrect
            $response = array(
                "status" => "error",
                "message" => "Invalid password"
            );
            header("Content-Type: application/json");
            echo json_encode($response);
        }
    }else{
        //user not found
        $response = array(
            "status" => "error",
            "message" => "Invalid username"
        );
        header("Content-Type: application/json");
        echo json_encode($response);
    }
}

  ?>
