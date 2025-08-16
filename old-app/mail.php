<?php
function sanitize_my_email($field) {
    $field = filter_var($field, FILTER_SANITIZE_EMAIL);
    if (filter_var($field, FILTER_VALIDATE_EMAIL)) {
        return true;
    } else {
        return false;
    }
}

function send() {
    // POST only
    if (!($_SERVER['REQUEST_METHOD'] === 'POST')){
        echo "Invalid request";
        return;
    }

    $fromInput = $_POST['from'];
    $fromName = $_POST['name'];
    $messageInput = $_POST['message'];

    // set header
    header('Content-Type: application/json');

    // checks
    $fromGood = sanitize_my_email($fromInput);
    if (!$fromGood){
        echo json_encode((object)['error' => 'Invalid E-MAIL']);
        return;
    }

    if (!$fromName || $fromName == ''){
        echo json_encode((object)['error' => 'Invalid NAME.']);
        return;
    }

    if (!$messageInput || $messageInput == '' || strlen($messageInput) < 50){
        echo json_encode((object)['error' => 'Invalid MESSAGE. Write at least 50 characters.']);
        return;
    }

    $to_email = 'contact@marianfocsa.info';
    $subject = 'New message from ' . $fromName;
    $headers = 'From: ' . $fromName . '<' . $fromInput . '>';

    mail($to_email, $subject, $messageInput, $headers);
    echo json_encode((object)['success' => true]);

}

send();
