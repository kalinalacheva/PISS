<?php

session_start();

$host = "localhost";
$username = "root";
$password = "";
$dbname = "db1";

// Create connection
$conn = mysqli_connect($host, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}



// Get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'),true);

// Retrieve the resource requested in the URI

// Handle the request based on the HTTP method
switch ($method) {
    case 'GET':
     
            getSubscriptions();
        
        break;
    case 'POST':
        
            // Get the form input values
            $name = $_POST['name'];
            $age = $_POST['age'];
            $location = $_POST['location'];
            $email = $_POST['email'];      
        
            // Insert the data into the database
            $query = $conn->prepare("INSERT INTO friends (name, age, location, email) VALUES (?,?,?,?)");
            $query->bind_param("ssss", $name, $age, $location, $email);
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

            break;
        
    }

    function getSubscriptions(){
        $host = "localhost";
        $username = "root";
        $password = "";
        $dbname = "db1";
        $conn = mysqli_connect($host, $username, $password, $dbname);

        $sql = "SELECT name, age, location, email FROM friends";
        $result = $conn->query($sql);
        $subscriptions = array();
    
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                $subscriptions[] = $row;
            }
            echo json_encode($subscriptions);
        } else {
            echo json_encode(array("error" => "No subscriptions found"));
        }
    }
    
    
?>