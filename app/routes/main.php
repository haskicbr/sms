<?php
/**
 * @var $app \Slim\App
 */

use App\Controllers\SmsController;

$app->get('/', function ($req, $res) {


    $template = "./../public/index.html";

    return file_get_contents($template);
});

$app->get('/sms', SmsController::class . ':get');
$app->post('/sms', SmsController::class . ':create');