<?php
    require_once 'php_action/do_select_action_E.php';
    class user_profile_api_E{
        static function check_account($em){
            $post = $em->getPost();
            $account = $post['account'];
            $password = $post['password'];
            $post['where_statement'] = "account = '$account' and password = '$password'";
            $post['join']='JOIN construction_project on user_profile.id =construction_project.manage_id';
            $em->setPost($post);
            $json = (new do_select_action_E())->actionPerformed($em);
            $obj = json_decode($json, true);
            if($obj['status_code'] == 0){
                $ds = $obj['data_set'];
                if(count($ds)!=0){
                    $obj['status_message'] = "login Success";
                }
                else{
                    $obj['status_code'] =-100;
                    $obj['status_message'] = "login Fail (Possible email or password error)";
                }
            }
            return $obj;
        }
        
    }
?>