// contact_form_handler.php

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve and sanitize form inputs
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $pizza = filter_input(INPUT_POST, 'pizza', FILTER_SANITIZE_STRING);
    $address = filter_input(INPUT_POST, 'address', FILTER_SANITIZE_STRING);
    $instructions = filter_input(INPUT_POST, 'instructions', FILTER_SANITIZE_STRING);

    // Validate fields
    $errors = [];
    if (!$name) {
        $errors[] = "Name is required.";
    }
    if (!$phone || !preg_match('/^[0-9]{10}$/', $phone)) {
        $errors[] = "Valid phone number is required.";
    }
    if (!$email) {
        $errors[] = "Valid email is required.";
    }
    if (!$pizza) {
        $errors[] = "Please select a pizza.";
    }
    if (!$address) {
        $errors[] = "Delivery address is required.";
    }

    if (empty($errors)) {
        // Processing the order (for demonstration, we'll use an email)
        $to = "hello@slingpizza.com";
        $subject = "New Order from Sling Pizza Website";
        $message = "You've received a new order:\n\n";
        $message .= "Name: $name\n";
        $message .= "Phone: $phone\n";
        $message .= "Email: $email\n";
        $message .= "Pizza: $pizza\n";
        $message .= "Address: $address\n";
        $message .= "Instructions: $instructions\n";

        $headers = "From: no-reply@slingpizza.com";

        if (mail($to, $subject, $message, $headers)) {
            echo "Thank you for your order! We'll get in touch with you shortly.";
        } else {
            echo "There was a problem sending your order. Please try again.";
        }
    } else {
        // Print errors
        foreach ($errors as $error) {
            echo "<p>$error</p>";
        }
    }
} else {
    // Not a POST request, something is wrong
    echo "Invalid request method.";
}
?>