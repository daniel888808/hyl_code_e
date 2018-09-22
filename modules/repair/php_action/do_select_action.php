<?php
    require_once 'include/php/action_listener.php';
    require_once 'include/php/event_message.php';
    require_once 'include/php/PDO_mysql.php';
        
    class do_select_action implements action_listener{
        public function actionPerformed(event_message $em) {
            $conn = PDO_mysql::getConnection();
            $sql = "SELECT id,name,namech FROM `repair_type`";
            $post = $em->getPost();
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute();
            
            if($result){
                $ds = $stmt->fetchAll(PDO::FETCH_ASSOC);
                $return_value['status_code'] = 0;
                $return_value['status_message'] = 'Execute Success';
                $return_value['data_set']=$ds;
                $return_value['user_id']=$_SESSION['user'];
            }
            else{
                $return_value['status_code'] = -1; 
                $return_value['sql'] = $sql;
            }
            return json_encode($return_value);
        }        
    }
?>