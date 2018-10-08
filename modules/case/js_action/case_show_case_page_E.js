class case_show_case_page_E extends ActionHandler {
    constructor(module, action, position_id, case_id) {
        super(module, action);
        this.position_id = position_id;
        this.case_id = case_id;
    }
    prepareArgs() {
        this.php = true;
        this.addArgs('case_id', this.case_id);
        this.case_id = null;
    }
    ajax_success(xhttp) {
        try {
            var json_str = xhttp.responseText;
            //console.log(json_str);
            var obj = JSON.parse(json_str);
            if (obj['status_code'] == 0) {
                var ds = obj['data_set'];
                console.log(obj);
                this.loadModuleScript("home", "show_home_page_E");
                this.loadModuleScript("repair", "show_apply_date_E");
                this.loadModuleScript("repair_company", "show_repair_company_E");
                this.loadModuleScript("case", "show_repair_type_E");
                this.loadModuleScript("case", "do_confirm_E");
                this.loadModuleScript("case", "do_unfinish_E");
                this.loadModuleScript("contact", "show_contact_E");
                this.loadModuleScript("repair", "show_repair_history_E");
                (new repair_show_apply_date_E('repair', 'show_apply_date_E', 'applydate', obj['rph_id'])).run();
                //(new repair_company_show_repair_company_E('repair_company', 'show_repair_company_E', 'repair_company', obj['case_data'][0]['repair_type_id'])).run();
                //(new case_show_repair_type_E('case', 'show_repair_type_E', 'repair_type', obj['case_data'][0]['repair_type_id'])).run();
                (new contact_show_contact_E('contact', 'show_contact_E', 'contact', obj['case_data'][0]['id'])).run();
                (new repair_show_repair_history_E('repair', 'show_repair_history_E', 'show_repair_history', obj['case_data'][0]['id'])).run();
                var content = "";
                content += `
                <nav class="navbar bgdark text-white py-1">
                    <a class="navbar-brand text-right" onclick="(new home_show_home_page_E('home','show_home_page_E','body','home')).run()">
                    <i class="fa fa-chevron-left text-white" aria-hidden="true"></i>
                </a>
                    <span class="h6 m-auto pr-3 font30">
                           維修狀況
                    </span>
                </nav>
                <!-- /.Navbar -->
            </header>
        
            <div class="container mt-4 pt-0 font30">
                <div class="row border boxShadow mt-2">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4">
                                <span>案名: ` + obj['construction_project'] + `</span>
                            </div>
                            <div class="col-4">
                                <span></span>
                            </div>
                            <div class="col-4" id="case_id" data-value= "` + obj['case_data'][0]['id'] + `">
                                <span>編號: ` + obj['case_data'][0]['id'] + `</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4">
                                <span>受理日期:</span>
                                <br>
                                <span>`;
                content += st_time_to_min(obj['case_data'][0]['start_datetime']);
                content += `</span>
                            </div>
                            <div class="col-4">
                                <span>完成日期:</span>
                                <br>
                                <span>`;
                if (obj['case_data'][0]['end_datetime'] == null) {
                    content += '未完成';
                }
                else {
                    content += st_time_to_min(obj['case_data'][0]['end_datetime']);
                }
                content += `</span>
                            </div>
                            <div class="col-4">
                                <span>保固期限:</span>
                                <br>
                                <span>`;
                content += st_time_to_date(obj['warranty']);
                content += `</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4">
                                <span>戶號: ` + obj['household_data'][0]['number'] + `</span>
                            </div>
                            <div class="col-4">
                                <span>客戶名稱: ` + obj['user_data']['data_set'][0]['name'] + `</span>
                            </div>
                            <div class="col-4">
                                <span>聯絡人: ` + obj['ename'] + `</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4">
                                <span>電話: ` + obj['user_data']['data_set'][0]['phone'] + `</span>
                            </div>
                            <div class="col-4">
        
                            </div>
                            <div class="col-4">
                                <span>維修類型:` + obj['repair_type_name'] + `</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12">
                                <span>地址: ` + obj['household_data'][0]['address'] + `</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12">
                                <span>維修項目: `;
                content += obj['case_data'][0]['title'];
                content += `</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12">
                                <span>詳細情況:</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12">
                                <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="10" placeholder="`;
                content += obj['case_data'][0]['content'];
                content += `" disabled></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 border boxShadow" id="show_repair_history">
                        
                    </div>
                    <div class="col-12 " id="contact">
                        
                    </div>
                    <div class="col-12 " id="apply_date_msg">
                        
                    </div>
                    `;
                if (obj['check_reserve'] == 0) {
                    content += `
                        <div class="row mx-2">`;
                    if (obj['check_apply'] == "yes") {
                        (new repair_company_show_repair_company_E('repair_company', 'show_repair_company_E', 'repair_company', obj['case_data'][0]['repair_type_id'])).run();
                        (new case_show_repair_type_E('case', 'show_repair_type_E', 'repair_type', obj['case_data'][0]['repair_type_id'])).run();
                        content += `
                            <div class="col-7" ">
                                <div id="repair_type" col-12 selectfont></div>
                                <div id="repair_company"></div>
                            </div>`;
                    }
                    content += `
                            <div class="col-5 font30">
                                <div id="applydate" class="row font30"></div>`;

                    if (obj['check_apply'] == "yes") {
                        content += `
                                <div class=" mt-2 ">
                                        <button type="button" class="btn btn-indigo font30" id="time_confirm">確認</button>
                                </div>`;
                    }
                    content += `
                                <div id="err_msg" class="font30"></div>
                            </div>
                            
                        </div>
                    `;
                    //onclick="(new case_do_confirm_E('case', 'do_confirm_E', 'body',` + obj['case_data'][0]['id'] + `,repaircompany_id,datetime)).run();"
                }
                else if (obj['check_finish'] != 10) {
                    content += `
                        <div>
                            <button type="button" class="btn btn-indigo font30" id="finish">完成維修</button>
                            <button type="button" class="btn btn-indigo font30" id="unfinish">待完成</button>
                            <a href="index.html"><button type="button" class="btn btn-danger font30">案件退回</button></a>
                            <div id="unfinish_err"></div>
                        </div>`;
                }
                // content += `
                //         <div class="col-12">
                //             <div class="row">
                //                 <div class="col-6">
                //                     <span>工務副理: 姚明</span>
                //                 </div>
                //                 <div class="col-6">
                //                     <span>維修經辦: ` + obj['ename'] + `</span>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                //     `;

                if (obj['check_finish'] == 10) {
                    content += `
                    <div class="col-12 mt-2 ">
                        客戶評價:`;
                    for (var i = 1; i <= 5; i++) {
                        if (i <= obj['case_data'][0]['user_rank']) {
                            content += `<span class="fa fa-star checked"></span>`;
                        }
                        else {
                            content += `<span class="fa fa-star"></span>`;
                        }
                        // content += `
                        //     <!--沒辦法就暫時用這個簡單版的 -->
                        //     <span class="fa fa-star checked"></span>
                        //     <span class="fa fa-star checked"></span>
                        //     <span class="fa fa-star checked"></span>
                        //     <span class="fa fa-star"></span>
                        //     <span class="fa fa-star"></span>
                        //     <!--沒辦法就暫時用這個簡單版的 -->
                        //     `;
                    }
                    content += `
                    </div>
                        <div class="col-12 mt-2 ">
                            客戶意見回復:
                            <div class="col-12 border boxShadow rounded p-3">
                                <p class="font30">` + obj['case_data'][0]['user_comment'] + `</p>
                            </div>
                        </div>
                    `;
                }
                content += `
                    </div>
                        </div>
                    
                        <script>
                            $(".button-collapse").sideNav();
                    
                            var sideNavScrollbar = document.querySelector('.custom-scrollbar');
                            Ps.initialize(sideNavScrollbar);
                            // SideNav Options
                            $(document).ready(function() {
                                $('.mdb-select').material_select();
                            });
                            var input = $('#manual-operations-input').pickatime({
                                autoclose: true,
                                'default': 'now'
                            });
                    
                            $('#check-minutes').click(function(e) {
                                e.stopPropagation();
                                input.pickatime('show').pickatime('toggleView', 'minutes');
                            });
                        </script>`;


                $('#' + this.position_id).html(content);
                $(function() {
                    $('#myTab a:last').tab('show')
                });

                function check_time_confirm() {
                    document.getElementById("err_msg").innerHTML = '';
                    var radio = $('input:radio:checked[name="group100"]').attr('id');
                    var company_id = $("#hid_com_id").val();
                    var date = "";
                    var time = "";
                    var datetime = "";
                    if (company_id != "no") {
                        console.log(company_id);
                        if (radio == undefined) {
                            document.getElementById("err_msg").innerHTML = '<font color="red" size="4">請點選時間</font>';
                        }
                        else if (radio == "radio101") {
                            time = document.getElementById("input_starttime1").value;
                            if (time == null || time == "") {
                                document.getElementById("err_msg").innerHTML = '<font color="red" size="4">請輸入時間</font>';
                            }
                            else {
                                date = $("#time1").data('date');
                                datetime = C_date(date) + " " + time + ":00";
                                console.log(datetime);
                                (new case_do_confirm_E('case', 'do_confirm_E', 'body', obj['case_data'][0]['id'], company_id, datetime)).run();
                            }

                        }
                        else if (radio == "radio102") {
                            time = document.getElementById("input_starttime2").value;
                            if (time == null || time == "") {
                                document.getElementById("err_msg").innerHTML = '<font color="red" size="4">請輸入時間</font>';
                            }
                            else {
                                date = $("#time2").data('date');
                                datetime = C_date(date) + " " + time + ":00";
                                console.log(datetime);
                                (new case_do_confirm_E('case', 'do_confirm_E', 'body', obj['case_data'][0]['id'], company_id, datetime)).run();
                            }
                        }
                        else if (radio == "radio103") {
                            time = document.getElementById("input_starttime3").value;
                            if (time == null || time == "") {
                                document.getElementById("err_msg").innerHTML = '<font color="red" size="4">請輸入時間</font>';
                            }
                            else {
                                date = $("#time3").data('date');
                                datetime = C_date(date) + " " + time + ":00";
                                console.log(datetime);
                                (new case_do_confirm_E('case', 'do_confirm_E', 'body', obj['case_data'][0]['id'], company_id, datetime)).run();
                            }

                        }
                        else if (radio == "radio104") {
                            time = document.getElementById("input_starttime4").value;
                            if (time == null || time == "") {
                                document.getElementById("err_msg").innerHTML = '<font color="red" size="4">請輸入時間</font>';
                            }
                            else {
                                date = $("#pick_date").val();
                                if (date) {
                                    datetime = C_date(date) + " " + time + ":00";
                                    console.log(datetime);
                                    (new case_do_confirm_E('case', 'do_confirm_E', 'body', obj['case_data'][0]['id'], company_id, datetime)).run();
                                }
                                else {
                                    document.getElementById("err_msg").innerHTML = '<font color="red" size="4">請輸入日期</font>';
                                }

                            }
                        }
                    }
                    else {
                        document.getElementById("err_msg").innerHTML = '<font color="red" size="4">請選擇廠商</font>';
                    }
                }

                function C_date(tt1) {
                    var tt3;
                    tt3 = tt1.split("/")[0] + "-" + tt1.split("/")[1] + "-" + tt1.split("/")[2];
                    return tt3;
                };

                function st_time_to_min(tt1) {
                    var tt3;
                    tt3 = tt1.split(" ")[0].split("-")[0] + "/" + tt1.split(" ")[0].split("-")[1] + "/" + tt1.split(" ")[0].split("-")[2] + " " + tt1.split(" ")[1].split(":")[0] + ":" + tt1.split(" ")[1].split(":")[1];
                    return tt3;
                };

                function st_time_to_date(tt1) {
                    var tt3;
                    tt3 = tt1.split(" ")[0].split("-")[0] + "/" + tt1.split(" ")[0].split("-")[1] + "/" + tt1.split(" ")[0].split("-")[2];
                    return tt3;
                };

                function check_repair_history(type) {
                    document.getElementById("unfinish_err").innerHTML = '';
                    if ($("#new_time").val() != null && $("#new_content").val() != null && $("#new_time").val() != "" && $("#new_content").val() != "") {
                        console.log("new time " + $("#new_time").val());
                        (new case_do_unfinish_E('case', 'do_unfinish_E', 'unfinish_err', $("#case_id").data("value"), type)).run();
                    }
                    else {
                        document.getElementById("unfinish_err").innerHTML = '<font color="red" size="4">請輸入資料</font>';
                    }
                }
                $(document).ready(function() {
                    $('.mdb-select').material_select();
                    $("#time_confirm").click(
                        function() {
                            check_time_confirm();
                        }
                    );
                    $("#unfinish").click(
                        function() {
                            check_repair_history("unfinish");
                        }
                    );
                    $("#finish").click(
                        function() {
                            check_repair_history("finish");
                        }
                    );
                });
                $('#input_starttime1').pickatime({});
                $('#input_starttime2').pickatime({});
                $('#input_starttime3').pickatime({});
            }
            else {
                $('#' + this.position_id).html(obj['status_message']);
            }

            this.loadModuleScript("case", "do_select_action");
        }
        catch (e) {
            var msg = e + "<br>";
            msg += "JSON String: " + json_str;
            $('#' + this.position_id).html(msg);
        }

    }
    ajax_error(msg) {
        $('#' + this.position_id).html(msg.status);
    }

}
