<?php

$errorMSG = "";

function check_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

// NAME
if (empty($_POST["firstName"])) {
  $errorMSG = "Name is required ";
} else {
  $firstName = check_input($_POST["firstName"]);
}

if (empty($_POST["lastName"])) {
  $errorMSG = "Name is required ";
} else {
  $lastName = check_input($_POST["lastName"]);
}

if (empty($_POST["company"])) {
  $errorMSG .= "Company is required ";
} else {
  $company = check_input($_POST["company"]);
}

if (empty($_POST["country"])) {
  $errorMSG .= "Country is required ";
} else {
  $country = check_input($_POST["country"]);
}

// EMAIL
if (empty($_POST["email"])) {
  $errorMSG .= "Email is required ";
} else {
  $email = check_input($_POST["email"]);
}

if (empty($_POST["phone"])) {
  $errorMSG .= "Phone is required ";
} else {
  $phone = check_input($_POST["phone"]);
}

// MESSAGE
if (empty($_POST["message"])) {
  $errorMSG .= "Message is required ";
} else {
  $message = check_input($_POST["message"]);
}


$EmailTo = "jonah.freeland@gmail.com";
$Subject = "New Enquiry Received";

// prepare email body text
$Body = "";
$Body .= "First name: ";
$Body .= $firstName;
$Body .= "\n";
$Body .= "Last name: ";
$Body .= $lastName;
$Body .= "\n";
$Body .= "Company: ";
$Body .= $company;
$Body .= "\n";
$Body .= "Country: ";
$Body .= $country;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $phone;
$Body .= "\n";
$Body .= "Enquiry: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
 echo "success";
}else{
  if($errorMSG == ""){
    echo "Something went wrong :(";
  } else {
    echo $errorMSG;
  }
}

?>