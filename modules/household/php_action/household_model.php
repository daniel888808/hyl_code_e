<?php
    // require_once 'include/php/action_listener.php';
    // require_once 'include/php/event_message.php';
    require_once 'include/php/model.php';
    //require_once 'include/php/PDO_mysql.php';
    
    class household_model extends model{
        public function __construct() {
            parent::__construct();
        }
        public function get_something_from_household_user($something,$where){//從household_user取
            $sql ="SELECT ".$something." FROM `household_user` WHERE $where";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchall();
            if ($result != null) {
                $return_value = $result;
            }
            return $return_value;

        }
        public function get_something_from_household_profile($something,$where){//從household_profile(戶)取
            $sql ="SELECT ".$something." FROM `household_profile` WHERE $where";
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
