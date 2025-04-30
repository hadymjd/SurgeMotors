<?php
require_once 'connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['reviewName']);
    $review = trim($_POST['reviewText']);
    $rating = $_POST['rating'];

    if (empty($name) || empty($review) || empty($rating)) {
        echo "All fields are required.";
        exit;
    }

    if (!is_numeric($rating) || $rating < 1 || $rating > 5) {
        echo "Rating must be a number between 1 and 5.";
        exit;
    }

    $sql = "INSERT INTO reviews (name, review, rating) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssi", $name, $review, $rating);

    if ($stmt->execute()) {
        echo "Review submitted successfully!";
        $to = "Devsquad@surgemotors.com";
        $subject = "New Customer Review Submitted";
        $message = "Name: $name\nRating: $rating/5\nReview:\n$review";
        $headers = "From: no-reply@surgemotors.com";
        mail($to, $subject, $message, $headers);
    } else {
        echo "Error: " . $stmt->error;
    }
}
?>
