<?php
    // require_once 'include/php/action_listener.php';
    // require_once 'include/php/event_message.php';
    require_once 'include/php/model.php';
    //require_once 'include/php/PDO_mysql.php';
    
    class user_profile_model extends model{
        public function __construct() {
            parent::__construct();
        }
        public function get_something_from_user_profile($something,$where){
            //$sql ="SELECT * FROM `user_profile` JOIN household_user on user_profile.id=household_user.user_profile_id JOIN household_profile ON household_user.household_profile_id=household_profile.id  WHERE user_profile.id=$user";
            $sql="SELECT ".$something." FROM `user_profile` WHERE ".$where;
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->fetchall();
            if ($result != null) {
                $return_value['data_set'] = $result;
            }
            return $return_value;

        }
        public function update_user_info($name,$phone,$email,$password,$user){
            $sql="UPDATE user_profile SET name=:name, phone=:phone, account=:email, password=:password Where user_profile.id=$user";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute(array(':name'=>$name, ':phone'=>$phone, ':email'=>$email ,':password'=>$password));
            // if ($result != null) {
            //     $return_value['data_set'] = $result;
            // }
            //return $return_value;

        }
    }
    
?>