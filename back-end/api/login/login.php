<?php
  // Connect to the database
  $host = 'localhost'; // replace with your hostname
  $username = 'root'; // replace with your username
  $password = ''; // replace with your password
  $dbname = 'db1'; // replace with your database name

  $conn = mysqli_connect($host, $username, $password, $dbname);
  
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  // Get the posted data
  $username = $_POST['username'];
  $password = $_POST['password'];

  $query = "SELECT password FROM users WHERE username = '$username'";
  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) == 1) {
      // Fetch the result as an associative array
      $row = mysqli_fetch_assoc($result);
      $stored_hash = $row['password'];
  }else $stored_hash = '';

  if (password_verify($password, $stored_hash)) {
    // User exists, log them in
    // Start a session
    session_start();
    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $username;
    header("Location: ../../../front-end/home/home.html");
  } else {
    // User does not exist, show an error message
    echo "Invalid username or password.";
  }
  mysqli_close($conn);
?>
