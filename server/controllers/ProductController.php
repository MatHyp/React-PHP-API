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
