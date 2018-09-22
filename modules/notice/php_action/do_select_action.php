<?php
    require_once 'include/php/action_listener.php';
    require_once 'include/php/event_message.php';
    
    class do_select_action implements action_listener{
        public function actionPerformed(event_message $em) {
            $userId=$_SESSION['userid'];
            $conn = PDO_mysql::getConnection();
            $sql = "SELECT * FROM `household_user` A JOIN `public_facilities` B ON A.household_profile_id = B.id JOIN `household_profile` C ON A.household_profile_id = C.id WHERE `user_profile_id` = $userId";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute();
            $userData =[];
            $allResult = [];
            $sum=[];
            if($result){
                $household = $stmt->fetchAll(PDO::FETCH_ASSOC);   
                $sql = "SELECT * FROM `user_profile` WHERE `id` = $userId";
                $stmt = $conn->prepare($sql);
                $result = $stmt->execute();
                if($result){
                    $user = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    $constructionProjectId = $household[0]['construction_project_id'];
                    $sql = "SELECT * FROM `construction_project` WHERE id = $constructionProjectId";
                    $stmt = $conn->prepare($sql);
                    $result = $stmt->execute();
                    if($result){
                        $building = $stmt->fetchAll(PDO::FETCH_ASSOC);
                        $householdId = $household[0]['id'];
                        $sql = "SELECT * FROM `case_profile` A JOIN `repair_type` B ON A.repair_type_id = B.id WHERE `household_user_id` = $householdId";
                        $stmt = $conn->prepare($sql);
                        $result = $stmt->execute();
                        if($result){
                            $cases = $stmt->fetchAll(PDO::FETCH_ASSOC);
                            foreach($cases as $key => $case){
                                $caseId = $cases[$key]['id'];
                                //  array_push($sum, $caseId);
                                $sql = "SELECT * FROM `notice` WHERE `case_profile_id` = $caseId";
                                $stmt = $conn->prepare($sql);
                                $result = $stmt->execute();
                                if($result){
                                    $notices = $stmt->fetchAll(PDO::FETCH_ASSOC);
                                    // array_push($sum, $notices);
                                    $repairTypeId = $cases[$key]['repair_type_id'];
                                    // array_push($sum, $repairTypeId);
                                    $sql = "SELECT * FROM `repair_company_profile` A JOIN `repair_company_type` B ON A.id = B.repair_company_id WHERE `repair_type_id` = $repairTypeId";
                                    $stmt = $conn->prepare($sql);
                                    $result = $stmt->execute();
                                    if($result){
                                        $repaircompanys = $stmt->fetchAll(PDO::FETCH_ASSOC);
                                        // array_push($sum, $repaircompanys);
                                        foreach($repaircompanys as $key => $repaircompany){
                                            $repaircompanyId = $repaircompanys[$key]['id'];
                                            //   array_push($sum, $repaircompanyId);
                                            $sql = "SELECT * FROM `repair_history_profile` A JOIN `applydate` B ON A.id = B.repair_history_id WHERE `case_id` = $caseId AND repair_company_id = $repaircompanyId";
                                            $stmt = $conn->prepare($sql);
                                            $result = $stmt->execute();
                                            if($result){
                                                $repair = $stmt->fetchAll(PDO::FETCH_ASSOC);
                                                $oneResult=[$case,$notices,$repaircompany,$repair];
                                                array_push($allResult, $oneResult);
                                     
                                            }
                                            else{
                                                $return_value['status_code'] = -2;
                                                $return_value['status_message'] = 'Execute repair error';
                                                $return_value['data_set'] = $sql;
                                       
                                            }
                                        } 
                                    }
                                    else{
                                            $return_value['status_code'] = -2;
                                            $return_value['status_message'] = 'Execute repaircompany error';
                                        }  
                                    
                                }
                                else{
                                    $return_value['status_code'] = -2;
                                    $return_value['status_message'] = 'Execute notice error';
                                }
                            }
                        }
                        else{
                            $return_value['status_code'] = -2;
                            $return_value['status_message'] = 'Execute case error';l;
                        }
                    }
                    else{
                        $return_value['status_code'] = -2;
                        $return_value['status_message'] = 'Execute building error';
                    }
                }else{
                    $return_value['status_num'] = -2;
                    $return_value['status_message'] = 'Execute household error';
                }
             
            }else{
                $return_value['status_num'] = -2;
                $return_value['status_message'] = 'Execute user error';
            }
            
            if($return_value['status_num'] != -2){
                array_push($userData, $user, $household, $building);
                $return_value['status_code'] = 0;
                $return_value['status_message'] = 'Execute Success';
                $return_value['userData'] = $userData;
                $return_value['data_set'] = $allResult;
            }
            return json_encode($return_value);
        }
    }
?>