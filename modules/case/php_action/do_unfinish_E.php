<?php
    require_once 'include/php/action_listener.php';
    require_once 'include/php/event_message.php';
    require_once 'modules/case/php_action/case_model.php';
    require_once 'modules/household/php_action/household_model.php';
    require_once 'modules/building/php_action/building_model.php';
    require_once 'modules/user_profile/php_action/user_profile_model.php';
    require_once 'modules/repair/php_action/repair_model.php';
    class do_unfinish_E implements action_listener{
        public function actionPerformed(event_message $em) {
    //          if(isset($_SESSION['useracc'])){
			 //   $user_id=$_SESSION['userid'];
		  //  }
		    $post = $em->getPost();
		    $case_id = $post['case_id'];
		    $new_time = $post['new_time'];
		    $new_content = $post['new_content'];
		    $type=$post['type'];
            $case_model = new case_model();
            $household_model= new household_model();
            $building_model= new building_model();
            $user_model = new user_profile_model();
            $repair_model= new repair_model();//要先找到Repair_history profile的Reservtime
            $return_value['status_code'] = 0;
            
            $repair_history_id=$repair_model->get_last_repair_history_id($case_id);
            // $return_value['test'] = "content ".$new_time." time".$new_content;
            // $return_value['repair_id'] =$repair_history_id;
            // $return_value['case_id']=$case_id;
            $return_value['type']=$type;
            $repair_model->update_repair_history("repair_content = '$new_content', work_time = '$new_time'","id=".$repair_history_id[0][0]);
            $repair_model->insert_new_repair_history($case_id);
            if($type=="finish"){
                $case_model->update_case_profile("`status` = 'finish'","id=$case_id");
            }
           
            return json_encode($return_value);
        }        
    }
?>