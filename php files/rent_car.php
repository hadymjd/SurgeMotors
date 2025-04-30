<?php
require_once 'connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $rental_days = $_POST['rental-days'];
    $pickup_date = $_POST['pickup-date'];
    $return_date = $_POST['return-date'];
    $full_name = htmlspecialchars(trim($_POST['full-name']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $email = htmlspecialchars(trim($_POST['email']));
    $license = htmlspecialchars(trim($_POST['license']));

    if (empty($rental_days) || empty($pickup_date) || empty($return_date) ||
        empty($full_name) || empty($phone) || empty($email) || empty($license)) {
        echo "All fields are required."; exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email."; exit;
    }

    $stmt = $conn->prepare("INSERT INTO rented_cars (rental_days, pickup_date, return_date, full_name, phone, email, license_number) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("issssss", $rental_days, $pickup_date, $return_date, $full_name, $phone, $email, $license);

    if ($stmt->execute()) {
        $to = "Devsquad@surgemotors.com";
        $subject = "New Car Rental Request";
        $body = "Name: $full_name\nPhone: $phone\nEmail: $email\nPickup: $pickup_date\nReturn: $return_date\nDays: $rental_days\nLicense: $license";
        $headers = "From: $email";

        mail($to, $subject, $body, $headers);
        echo "Car rental submitted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }
}
?>
