<?php
    require_once 'include/php/action_listener.php';
    require_once 'include/php/event_message.php';
    
    class do_select_action implements action_listener{
        public function actionPerformed(event_message $em) {
            $conn = PDO_mysql::getConnection();
            $sql = "SELECT * FROM `announcement` order by date desc";
            $post = $em->getPost();
            $id=$_SESSION['user'];
            
            if($where_statement != ""){
                $sql .= " where $where_statement";
            }
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute();
            if($result){
                $ds = $stmt->fetchAll();
                $return_value['status_code'] = 0;
                $return_value['status_message'] = 'Execute Success';
                $return_value['data_set'] = $ds;
                $return_value['sql'] = $sql;
            }
            else{
                $return_value['status_code'] = -1;
                $return_value['status_message'] = 'Execute error';
                $return_value['sql'] = $sql;
            }
            
            
            
            $conn = PDO_mysql::getConnection();
            $sql = "SELECT * FROM `announcement_image`";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute();
            if($result){
                $ds = $stmt->fetchAll();
                $return_value['status_message'] = 'Execute Success';
                $return_value['data_set1'] = $ds;
                $return_value['sql'] = $sql;
            }
            else{
                $return_value['status_code'] = -1;
                $return_value['status_message'] = 'Execute error';
                $return_value['sql'] = $sql;
            }
            
            
            
            
            
            
            return json_encode($return_value);
        }        
    }
?>


