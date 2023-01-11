<?php
session_start();

//connect to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// check for a post request
if($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the username and password from the request
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // prepare the query
    $query = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
    $query->bind_param("ss", $username, $password);
    $query->execute();
    $result = $query->get_result();
    if($result->num_rows > 0){
        // user found
        $_SESSION['username'] = $username;
        header("location: welcome.php");
    }else{
        // user not found
        $error = "Invalid username or password";
    }
}
