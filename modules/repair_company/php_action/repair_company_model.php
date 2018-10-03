<?php
    // require_once 'include/php/action_listener.php';
    // require_once 'include/php/event_message.php';
    //require_once 'include/php/PDO_mysql.php';
    require_once 'include/php/model.php';
    
    class repair_company_model extends model{
        public function __construct() {
            parent::__construct();
        }
        public function get_last_insert(){
            $sql ="select LAST_INSERT_ID();";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchall();
            if ($result != null) {
                 $return_value = $result;
             }
            return $return_value[0][0];

        }
        public function get_something_from_repair_company_profile($something,$where){
            $sql ="SELECT $something FROM `repair_company_profile` WHERE $where";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchall();
            if ($result != null) {
                 $return_value = $result;
             }
            return $return_value;

        }
        public function get_something_from_repair_company_type($something,$where){
            $sql ="SELECT $something FROM `repair_company_type` WHERE $where";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchall();
            if ($result != null) {
                 $return_value = $result;
             }
            return $return_value;

        }
        
        
    }
    
?>