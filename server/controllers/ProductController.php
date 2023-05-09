<?php

class Product
{
    public $mysqli;


    public function __construct()
    {
        $this->mysqli = new mysqli('localhost', 'root', '', 'scandiweb_db');
    }

    public function getAllProducts()
    {
        $products = array();
        $result = $this->mysqli->query("SELECT * FROM products");


        while ($row = $result->fetch_assoc()) {
            array_push($products, array(
                'name' => $row['name']
            ));
        }

        return json_encode($products);
    }

    public function addProduct()
    {
        $productSku = filter_var($this->getData('sku'), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $productName = filter_var($this->getData('name'), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $productPrice = filter_var($this->getData('price'), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $productType = filter_var($this->getData('type'), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $productAttribute = filter_var($this->getData('attribute'), FILTER_SANITIZE_FULL_SPECIAL_CHARS);


        $result = $this->mysqli->query("INSERT INTO `products` (`sku`, `name`, `price`, `type`, `attribute`) VALUES ('$productSku',  '$productName', '$productPrice', '$productType', '$productAttribute')");

        return json_encode($result);
    }

    public function massDelate()
    {
        $productSku = filter_var($this->getData('name'), FILTER_SANITIZE_FULL_SPECIAL_CHARS);

        return json_encode($productSku);
    }

    public function getData($value = '')
    {
        $json = json_decode(file_get_contents('php://input'), true);
        if ($value === '')
            return $json;
        if (!$json[$value])
            return NULL;
        return $json[$value];
    }
}
