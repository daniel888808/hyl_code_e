<?php
    require_once 'include/php/action_listener.php';
    require_once 'include/php/event_message.php';
    
    class do_select_action_E implements action_listener{
        public function actionPerformed(event_message $em) {
            $userData =[];
            $allResult = [];
            $sum=[];
            
            $conn = PDO_mysql::getConnection();
            $sql = "SELECT A.id,status,household_user_id,repair_type_id,title,content,user_rank,user_conmment,start_datetime,end_datetime,name,namech FROM `case_profile` A JOIN repair_type B ON A.repair_type_id=B.id";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute();
            if($result){
                $cases = $stmt->fetchAll(PDO::FETCH_ASSOC);
                foreach($cases as $key => $case){
                    $caseId = $cases[$key]['id'];
                    $sql = "SELECT * FROM `notice` WHERE `case_profile_id` = $caseId"; 
                    $stmt = $conn->prepare($sql);
                    $result = $stmt->execute();
                    if($result){
                        $notice = $stmt->fetchAll(PDO::FETCH_ASSOC);
                        $sql = "SELECT * FROM `repair_history_profile` WHERE `case_id` = $caseId AND reservetime IS NULL";
                        $stmt = $conn->prepare($sql);
                        $result = $stmt->execute();
                        if($result){
                            $repair = $stmt->fetchAll(PDO::FETCH_ASSOC);
                            $householdUserId = $cases[$key]['household_user_id'];
                            $sql = "SELECT * FROM `household_user` A JOIN  household_profile B ON A.household_profile_id = B.id WHERE `household_profile_id` = $householdUserId";
                            $stmt = $conn->prepare($sql);
                            $result = $stmt->execute();
                            if($result){
                                $household = $stmt->fetchAll(PDO::FETCH_ASSOC);
                                $constructionProjectId = $household[0]['construction_project_id'];
                                $sql = "SELECT * FROM `construction_project` WHERE `id` = $constructionProjectId";
                                $stmt = $conn->prepare($sql);
                                $result = $stmt->execute();
                                if($result){
                                    $building = $stmt->fetchAll(PDO::FETCH_ASSOC);
                                    // $oneResult=[$householdUserId];
                                    $oneResult=['case'=>$cases[$key],'notice'=>$notice,'repair'=>$repair,'household'=>$household,'building'=>$building];
                                    array_push($allResult, $oneResult);
                                }
                                else{
                                    $return_value['status_code'] = -2;
                                    $return_value['status_message'] = 'Execute $building error';
                                    $return_value['data_set'] = $sql;
                                }
                            }
                            else{
                                $return_value['status_code'] = -2;
                                $return_value['status_message'] = 'Execute $households error';
                                $return_value['data_set'] = $sql;
                            }
                        }
                        else{
                            $return_value['status_code'] = -2;
                            $return_value['status_message'] = 'Execute $repairs error';
                        }  
                    }
                    else{
                        $return_value['status_code'] = -2;
                        $return_value['status_message'] = 'Execute $repairs error';
                    } 
                }
            }
            else{
                 $return_value['status_code'] = -2;
                 $return_value['status_message'] = 'Execute $cases error';
            }
            
            
            if($return_value['status_num'] != -2){
                // array_push($userData, $user, $household, $building);
                $return_value['status_code'] = 0;
                $return_value['status_message'] = 'Execute Success';
                // $return_value['userData'] = $userData;
                $return_value['data_set'] = $allResult;
            }
            return json_encode($return_value);
        }
    }
?>