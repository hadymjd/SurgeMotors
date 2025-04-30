<?php
require_once 'connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $make = $_POST['make'];
    $model = $_POST['model'];
    $year = $_POST['year'];
    $mileage = $_POST['mileage'];
    $price = $_POST['vin']; // Assumed to be the price input
    $condition = $_POST['condition'];
    $description = $_POST['description'];
    $seller_name = $_POST['seller-name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $address = $_POST['address'];

    if (empty($make) || empty($model) || empty($year) || empty($mileage) || empty($price) ||
        empty($condition) || empty($description) || empty($seller_name) || empty($phone) ||
        empty($email) || empty($address)) {
        echo "All fields are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    $image_paths = [];
    if (!empty($_FILES['images']['name'][0])) {
        foreach ($_FILES['images']['tmp_name'] as $key => $tmp_name) {
            $target_dir = "../uploads/";
            $file_name = basename($_FILES["images"]["name"][$key]);
            $target_file = $target_dir . time() . "_" . $file_name;

            if (move_uploaded_file($tmp_name, $target_file)) {
                $image_paths[] = $target_file;
            }
        }
    }

    $images = implode(",", $image_paths);

    $sql = "INSERT INTO car_sale_requests (make, model, year, mileage, price, car_condition, description, images, seller_name, phone, email, address)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssiissssssss", $make, $model, $year, $mileage, $price, $condition, $description, $images, $seller_name, $phone, $email, $address);

    if ($stmt->execute()) {
        $to = "Devsquad@surgemotors.com";
        $subject = "New Car for Sale Submission";
        $message = "Seller: $seller_name\nPhone: $phone\nEmail: $email\nCar: $make $model ($year)\nMileage: $mileage\nPrice: $price\nCondition: $condition\nDescription: $description\nAddress: $address\nImages: $images";
        $headers = "From: no-reply@surgemotors.com";

        mail($to, $subject, $message, $headers);

        echo "Car listing submitted and email sent!";
    } else {
        echo "Error: " . $stmt->error;
    }
}
?>
