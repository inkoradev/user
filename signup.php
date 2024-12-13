<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Database credentials
$servername = "localhost";  // Usually "localhost" for XAMPP
$username = "root";         // Default MySQL username in XAMPP
$password = "";             // Default MySQL password in XAMPP (empty)
$dbname = "user_signup";    // Replace with your actual database name

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    $confirm_password = mysqli_real_escape_string($conn, $_POST['confirm_password']);

    // Check if passwords match
    if ($password !== $confirm_password) {
        echo "Passwords do not match!";
        exit;
    }

    // Hash the password before storing it in the database
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Check if the username already exists
    $check_username_query = "SELECT * FROM users WHERE username='$username'";
    $result = $conn->query($check_username_query);
    if ($result->num_rows > 0) {
        echo "Username already exists!";
        exit;
    }

    // Prepare the SQL query to insert data into the users table
    $sql = "INSERT INTO users (username, name, password) VALUES ('$username', '$name', '$hashed_password')";

    if ($conn->query($sql) === TRUE) {
        echo "New account created successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>
