<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "surgemotors";

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $conn = new mysqli($host, $user, $password, $database);
    $conn->set_charset("utf8mb4"); // Set charset
} catch (Exception $e) {
    error_log($e->getMessage());
    exit("Database connection failed.");
}
?>
