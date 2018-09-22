<?php
    require_once 'include/php/action_listener.php';
    require_once 'include/php/event_message.php';
    
    class do_select_action implements action_listener{
        public function actionPerformed(event_message $em) {
            $conn = PDO_mysql::getConnection();
            $sql = "SELECT * from case_profile where id=:id";
            $post = $em->getPost();
            $id=$_SESSION['user'];
            // $where_statement = $post['where_statement'];
            // if($where_statement != ""){
            //     $sql .= " where $where_statement";
            // }
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute(array(':id'=>$id ));
            if($result){
                $ds = $stmt->fetchAll(PDO::FETCH_ASSOC);
                $return_value['status_code'] = 0;
                $return_value['status_message'] = 'Execute Success';
                $return_value['data_set'] = $ds;
                $return_value['sql'] = $sql;
            }
            else{
                $return_value['status_code'] = -1;
                $return_value['status_message'] = 'SQL Execute Error in (case, do_select_action)';
                $return_value['sql'] = $sql;
            }
            return json_encode($return_value);
        }        
    }
?>