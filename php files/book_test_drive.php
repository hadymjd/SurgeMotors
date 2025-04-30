<?php
require_once 'connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $date = $_POST['date'];
    $time = $_POST['time'];
    $car_model = htmlspecialchars(trim($_POST['car_model']));

    // Validate inputs
    if (empty($name) || empty($email) || empty($phone) || empty($date) || empty($time) || empty($car_model)) {
        echo "All fields are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }
    
    if (!preg_match('/^[0-9]{10,}$/', $phone)) {
        echo "Invalid phone number. Must be at least 10 digits.";
        exit;
    }

    // Insert into database
    $stmt = $conn->prepare("INSERT INTO test_drive_bookings (name, email, phone, date, time, car_model) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $name, $email, $phone, $date, $time, $car_model);

    if ($stmt->execute()) {
        // Send email notification
        $to = "Devsquad@surgemotors.com";
        $subject = "New Test Drive Booking";
        $message = "Name: $name\nEmail: $email\nPhone: $phone\nDate: $date\nTime: $time\nCar Model: $car_model";
        $headers = "From: $email";

        if (mail($to, $subject, $message, $headers)) {
            echo "success:Test Drive Booked Successfully! We have sent you a confirmation email.";
        } else {
            echo "success:Test Drive Booked! (Email notification failed)";
        }
    } else {
        echo "error:Database error: " . $stmt->error;
    }
    
    $stmt->close();
    $conn->close();
} else {
    echo "error:Invalid request method.";
}
?>