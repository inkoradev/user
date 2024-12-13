<?php
// Database configuration
$host = 'localhost';
$dbname = 'blogging_site';
$username = 'root'; // Replace with your database username
$password = '';     // Replace with your database password

try {
    // Connect to the database
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get blog data from the form
    $title = htmlspecialchars($_POST['title']);
    $content = htmlspecialchars($_POST['content']);
    $author = htmlspecialchars($_POST['author']);

    // Validate inputs
    if (empty($title) || empty($content) || empty($author)) {
        echo "All fields are required.";
        exit;
    }

    try {
        // Insert blog into the database
        $stmt = $conn->prepare("INSERT INTO blogs (title, content, author, created_at) VALUES (:title, :content, :author, NOW())");
        $stmt->bindParam(':title', $title);
        $stmt->bindParam(':content', $content);
        $stmt->bindParam(':author', $author);

        $stmt->execute();
        echo "Blog submitted successfully!";
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
} else {
    echo "Invalid request.";
}
?>
<form action="submit-blog.php" method="POST">
    <label for="title">Blog Title:</label>
    <input type="text" id="title" name="title" required>

    <label for="content">Content:</label>
    <textarea id="content" name="content" rows="10" required></textarea>

    <label for="author">Author:</label>
    <input type="text" id="author" name="author" required>

    <button type="submit">Submit Blog</button>
</form>
