<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
// header("Content-type: application/json; charset=UTF-8");

require('./controllers/ProductController.php');


$parts = explode("/", $_SERVER["REQUEST_URI"]);

if ($parts[3] != "products" && $parts[3] != "removeProducts" && $parts[3] != "addProducts") {
    http_response_code(404);
    exit;
}

$productController = new Product();


switch ($parts[3]) {
    case "products":

        echo $productController->getAllProducts();
        break;
    case "addProducts":

        echo $productController->addProduct();
        break;
    case "removeProducts":

        echo $productController->massDelate();
        break;
}
