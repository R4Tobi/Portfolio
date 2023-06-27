<?php
// Include the PHPMailer files
require 'public/php/PHPMailer/PHPMailer.php';
require 'public/php/PHPMailer/SMTP.php';
require 'public/php/PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// PHPMailer configuration and email sending logic
// Create a new PHPMailer instance
$mailer = new PHPMailer();

// SMTP Configuration
$mailer->isSMTP();
$mailer->Host = 'smtp.example.com'; // Update with your SMTP server hostname
$mailer->SMTPAuth = true;
$mailer->Username = 'your_email@example.com'; // Update with your email address
$mailer->Password = 'your_email_password'; // Update with your email password
$mailer->Port = 587; // Update with the SMTP port number

// Email configuration
$mailer->setFrom('your_email@example.com', 'Your Name'); // Update with your email address and name
$mailer->addAddress('recipient@example.com', 'Recipient Name'); // Update with the recipient's email address and name
$mailer->Subject = 'Contact Form Submission';

// Email content
$emailContent = "Name: " . $_POST['name'] . "\n";
$emailContent .= "Email: " . $_POST['email'] . "\n";
$emailContent .= "Subject: " . $_POST['subject'] . "\n";
$emailContent .= "Message: " . $_POST['message'] . "\n";
$mailer->Body = $emailContent;

// Send the email
if ($mailer->send()) {
  echo json_encode(['message' => 'Email sent successfully']);
} else {
  echo json_encode(['message' => 'Failed to send email']);
}


?>