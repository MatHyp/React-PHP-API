<?php
class MySQLConnection
{

    public $sqlHost;
    public $sqlUser;
    public $sqlPassword;
    public $sqlDatabase;


    public function __construct($sqlHost, $sqlUser, $sqlPassword, $sqlDatabase = FALSE)
    {
        $this->sqlHost = $sqlHost;
        $this->sqlUser = $sqlUser;
        $this->sqlPassword = $sqlPassword;
        $this->sqlDatabase = $sqlDatabase;
    }

    public function Connect()
    {
        $connection = new mysqli($this->sqlHost, $this->sqlUser, $this->sqlPassword, $this->sqlDatabase);

        if ($connection->connect_error) {
            die("Connection failed " . $connection->connect_error);
        }

        return $connection;
    }
}
