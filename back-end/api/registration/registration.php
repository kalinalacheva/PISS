<?php
// Connect to the database
$host = "localhost";
$username = "root";
$password = "";
$dbname = "db1";
$conn = mysqli_connect($host, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get the form data
$username = mysqli_real_escape_string($conn, $_POST['username']);
$password = mysqli_real_escape_string($conn, $_POST['password']);
$email = mysqli_real_escape_string($conn, $_POST['email']);

// Hash the password
$password = password_hash($password, PASSWORD_DEFAULT);

// Insert the user into the database
$query = "INSERT INTO users (username, password, email) VALUES ('$username', '$password', '$email')";
if (mysqli_query($conn, $query)) {
    echo "User created successfully";
} else {
    echo "Error: " . $query . "<br>" . mysqli_error($conn);
}

// Close the connection
mysqli_close($conn);
?>
