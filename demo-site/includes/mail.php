<?php
$name = $_POST["name"];
$lastname = $_POST["lastname"];
$phone = $_POST["phone"];
$email = $_POST["email"];


$EmailTo = "mateohoxha26@gmail.com";
$Subject = "New Message Received";

// prepare email body text


$Fields .= "Name: ";
$Fields .= $name;
$Fields .= "\n";

$Fields .= "Last Name: ";
$Fields .= $lastname;
$Fields .= "\n";

$Fields.= "Email: ";
$Fields .= $email;
$Fields .= "\n";

$Fields .= "Phone: ";
$Fields .= $phone;
$Fields .= "\n";


// send email
$success = mail($EmailTo,  $Subject,  $Fields, "From:".$email);

