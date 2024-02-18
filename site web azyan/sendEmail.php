<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $subject = $_POST['Subject'];
    $message = $_POST['Message'];

    // Send email (you'll need to configure your email settings)
    $to = "mohamedaboualine@gmail.com";
    $headers = "From: $email" . "\r\n";
    mail($to, $subject, $message, $headers);

    // Redirect back to your contact page after submission
    header("Location: contact.html");
    exit();
}
?>
<?php
$to = "mohamedaboualine@gmail.com";
$subject = "Test email";
$message = "This is a test email.";

mail($to, $subject, $message);
echo "Email sent successfully!";
?>
