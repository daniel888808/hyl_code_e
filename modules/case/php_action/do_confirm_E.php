<?php
    require_once 'include/php/action_listener.php';
    require_once 'include/php/event_message.php';
    require_once 'modules/case/php_action/case_model.php';
    require_once 'modules/household/php_action/household_model.php';
    require_once 'modules/building/php_action/building_model.php';
    require_once 'modules/user_profile/php_action/user_profile_model.php';
    require_once 'modules/repair/php_action/repair_model.php';
    class do_confirm_E implements action_listener{
        public function actionPerformed(event_message $em) {
    //          if(isset($_SESSION['useracc'])){
			 //   $user_id=$_SESSION['userid'];
		  //  }
		    $post = $em->getPost();
		    $case_id = $post['case_id'];
		    $repair_company_id=$post['repair_company_id'];
		    $datetime=$post['datetime'];
            $case_model = new case_model();
            $household_model= new household_model();
            $building_model= new building_model();
            $user_model = new user_profile_model();
            $repair_model= new repair_model();
            $return_value['status_code'] = 0;
            $return_value['test']=" com_id".$repair_company_id." case_id".$case_id." datetime".$datetime;
            $case_data=$case_model->get_something_from_case_profile("*","id=$case_id");
             if($case_data){
                $repair_history_id=$repair_model->get_last_repair_history_id($case_id);
                $repair_model->update_repair_history("reservetime = '$datetime', repair_company_id='$repair_company_id'" ,"repair_history_profile.id =".$repair_history_id[0][0]);
                $case_model->update_case_profile("status='unfinish'","id=".$case_id);
            //     if($case_data[0]['status']=="finish"){
            //         $return_value['check_finish'] = 10;
            //         $return_value['status_message'] = "已完成的案件";
            //     }else if($case_data[0]['status']=="unfinish"){
            //         $return_value['check_finish'] = 11;
            //         if($reservetime[0][0]!=null){
            //             $return_value['status_message'] = "未完成的案件 已確認時間";
            //             $return_value['check_reserve']=1;
            //         }else{
            //             $return_value['status_message'] = "未完成的案件 待確認時間";
            //             $return_value['check_reserve']=0;
            //         }
            //     }else if($case_data[0]['status']=="new"){
            //         $return_value['check_finish'] = 12;
            //         if($reservetime[0][0]!=null){
            //             $return_value['status_message'] = "新案件 已確認時間";
            //             $return_value['check_reserve']=1;
            //         }else{
            //             $return_value['status_message'] = "新案件 待確認時間";
            //             $return_value['check_reserve']=0;
            //         }
            //     }
            }else{
                $return_value['status_code'] = 100;
                $return_value['status_message'] = "沒有收到case_id";
            }
            return json_encode($return_value);
        }        
    }
?>