<?php
    // require_once 'include/php/action_listener.php';
    // require_once 'include/php/event_message.php';
    //require_once 'include/php/PDO_mysql.php';
    require_once 'include/php/model.php';
    
    class repair_model extends model{
        public function __construct() {
            parent::__construct();
        }
        public function select_repair_type(){
            $sql = "SELECT id,name,namech FROM `repair_type`";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchall();
            if($result){
                $ds = $stmt->fetchAll(PDO::FETCH_ASSOC);
                $return_value['status_code'] = 0;
                $return_value['status_message'] = 'Execute Success';
                $return_value['data_set']=$ds;
                $return_value['user_id']=$_SESSION['user'];
            }else{
                $return_value['sql'] = $sql;
            }
            return $return_value;

        }
        public function insert_new_repair_history($case_id){
            $sql ="INSERT INTO `repair_history_profile` (`id`, `case_id`, `reservetime`, `repair_company_id`, `repair_content`, `work_time`) VALUES (NULL, '$case_id', NULL, NULL, NULL, NULL);";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
        }
        public function insert_new_applydate($repair_history_id){
            $sql ="INSERT INTO `applydate` (`id`, `repair_history_id`, `start_Time`, `end_Time`) VALUES (NULL, '$repair_history_id', '2018-09-21 00:00:00', '2018-09-28 00:00:00');";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
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
        public function get_something_from_repair_history($something,$where){
            $sql ="SELECT $something FROM `repair_history_profile` WHERE $where";
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