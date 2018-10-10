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
         public function insert_new_repair_company($name,$contactor,$address,$phone){
            $sql ="INSERT INTO `repair_company_profile` (`id`, `name`, `contactor`, `address`, `phone`) VALUES (NULL,'$name', '$contactor', '$address', '$phone')";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
        }
        public function update_new_repair_company($name,$contactor,$address,$phone,$user){
            $sql="UPDATE repair_company_profile SET name=:name, contactor=:contactor, address=:address , phone=:phone Where repair_company_profile.id=$user";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute(array(':name'=>$name,  ':contactor'=>$contactor ,':address'=>$address, ':phone'=>$phone));
        }
        public function do_delete($id){
            $sql = "DELETE FROM repair_company_type WHERE id=?";
            $stmt = $this->conn->prepare($sql);
            $result = $stmt->execute(array($id));
            if($result){ 
                $return_value['status_code'] = 0;
                $return_value['status_message'] = '刪除成功';
            } else{
                $return_value['status_code'] = -1;
                $return_value['status_message'] = "刪除失敗" . $id;
            }
            return $return_value;
        }
        
        
            public function insert_repair_company_type($repair_type_id){
            $sql ="INSERT INTO `repair_company_type` (`id`, `repair_type_id`,`repair_company_id`) VALUES (NULL,'$repair_type_id','LAST_INSERT_ID()')";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
        }
        
        
        
    }
    
?>