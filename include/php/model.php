<?php
require_once 'PDO_mysql.php';
abstract class model{
    protected $conn = null;
public function __construct(){
    // $config = config_json::read("config.json.php");
    //         $dsn = sprintf("mysql:host=%s;dbname=%s;charset=utf8", $config["db"]["db_host"], $config["db"]["db_name"]);
    //         try {
    //             $conn = new PDO($dsn, $config["db"]["db_user"], $config["db"]["db_password"]);
    //             $this->conn = $conn;
    //         } catch (PDOException $e) {
    //             echo $e->getMessage();
    //         }
    $this->conn = PDO_mysql::getConnection();
}
}
?>