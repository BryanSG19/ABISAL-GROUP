<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

function clean_header_value($value) {
    return trim(preg_replace('/[\r\n]+/', ' ', (string) $value));
}

$type = clean_header_value($_POST['type'] ?? 'contact');

// Honeypot: a hidden field real visitors never fill in. Bots that blindly
// fill every input trip it, so we silently report success without sending.
$honeypot = trim((string) ($_POST['website'] ?? ''));
if ($honeypot !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

$to = 'contacto@abisalgroup.com';
$fromEmail = clean_header_value($_POST['email'] ?? '');

if (!filter_var($fromEmail, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid email']);
    exit;
}

if ($type === 'newsletter') {
    $subject = 'Nuevo suscriptor al newsletter — ABISAL GROUP';
    $body = "Nueva suscripción al newsletter.\n\nCorreo: {$fromEmail}\n";
} else {
    $name = clean_header_value($_POST['name'] ?? '');
    $company = clean_header_value($_POST['company'] ?? '');
    $message = trim((string) ($_POST['message'] ?? ''));

    if ($name === '' || $message === '') {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
        exit;
    }

    $subject = 'Nuevo mensaje de contacto — ABISAL GROUP';
    $body = "Nombre: {$name}\nCorreo: {$fromEmail}\nEmpresa: {$company}\n\nMensaje:\n{$message}\n";
}

$headers = [
    'From: ABISAL GROUP Website <no-reply@abisalgroup.com>',
    'Reply-To: ' . $fromEmail,
    'Content-Type: text/plain; charset=UTF-8',
];

$success = mail($to, $subject, $body, implode("\r\n", $headers));

if ($success) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Failed to send']);
}
