<?php
    require_once 'include/php/action_listener.php';
    require_once 'include/php/event_message.php';
    require_once 'modules/case/php_action/case_model.php';
    require_once 'modules/household/php_action/household_model.php';
    require_once 'modules/building/php_action/building_model.php';
    require_once 'modules/repair/php_action/repair_model.php';
    class show_select_page_E implements action_listener{
        public function actionPerformed(event_message $em) {
             if(isset($_SESSION['useracc'])){
			    $user_id=$_SESSION['userid'];
		    }
		    
            $case_model = new case_model();
            $household_model= new household_model();
            $building_model= new building_model();
            $repair_model= new repair_model();
            
            
            
            $building_id=$building_model->get_id_from_construction_project("id",$user_id);
            
            $building_name=$building_model->get_construction_project_data("name","manage_id = ".$user_id);
            
            $household_id = $household_model->get_something_from_household_profile("id","construction_project_id =".$building_id[0][0]);
            
            
            
            $household_user=array();
            $caseall=array();
            $casenew=array();
            $caseunfin=array();
            $h;$hi;
            
            $household_model= new household_model();
            
            
            
            for($i=0;$i<sizeof($household_id);$i++){
                $h = $household_model->get_something_from_household_user("id","household_profile_id = ".$household_id[$i]["id"]);
                array_push($household_user,$h[0][0]);
            }
            
            
            for($i=0;$i<sizeof($household_user);$i++){
                $hi=$case_model->get_something_from_case_profile("*","household_user_id=".$household_user[$i][0]." ORDER BY `start_datetime` DESC");
                array_push($caseall,$hi);
            }
            
            
            
            for($i=0;$i<sizeof($household_user);$i++){
                $hi=$case_model->get_something_from_case_profile("*","`status` = 'new' and household_user_id=".$household_user[$i][0]." ORDER BY `start_datetime` DESC");
                array_push($casenew,$hi);
            }
            
            for($i=0;$i<sizeof($household_user);$i++){
                $hi=$case_model->get_something_from_case_profile("*","`status` = 'unfinish' and household_user_id=".$household_user[$i][0]);
                array_push($caseunfin,$hi);
            }
            
            
            
            
            $household_data = $household_model->get_something_from_household_profile("id,number","construction_project_id =".$building_id[0][0]);
            
            $reservetime=$repair_model->check_reservetime($case_id);
            
            
            
            
            if($caseall){
                $ds = $caseall;
                $return_value['status_code'] = 0;
                $return_value['status_message'] = 'Execute Success';
                $return_value['data_set'] = $ds;
                $return_value['buildingname'] = $building_name;
                $return_value['test']=$household_data;
                $return_value['sql'] = $sql;
            }
            
            else{
                $return_value['status_code'] = -1;
                $return_value['status_message'] = '最近沒有';
                $return_value['data_set'] = (sizeof($household_user));
                $return_value['sql'] = $sql;
                
            }
            
            return json_encode($return_value);
        }        
    }
?>