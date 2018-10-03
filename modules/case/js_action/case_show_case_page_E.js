class case_show_case_page_E extends ActionHandler {
    constructor(module, action, position_id, case_id) {
        super(module, action);
        this.position_id = position_id;
        this.case_id = case_id;
    }
    prepareArgs() {
        this.php = true;
        this.addArgs('case_id', this.case_id);
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
                (new repair_show_apply_date_E('repair', 'show_apply_date_E', 'applydate', obj['rph_id'])).run();
                (new repair_company_show_repair_company_E('repair_company', 'show_repair_company_E', 'repair_company', obj['case_data'][0]['repair_type_id'])).run();
                (new case_show_repair_type_E('case', 'show_repair_type_E', 'repair_type', obj['case_data'][0]['repair_type_id'])).run();
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
                            <div class="col-4">
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
                content += obj['case_data'][0]['start_datetime'];
                content += `</span>
                            </div>
                            <div class="col-4">
                                <span>完成日期:</span>
                                <br>
                                <span>`;
                if (obj['case_data'][0]['end_datetime'] == null) {
                    obj['case_data'][0]['end_datetime'] = '';
                }
                content += obj['case_data'][0]['end_datetime'];
                content += `</span>
                            </div>
                            <div class="col-4">
                                <span>保固期限:</span>
                                <br>
                                <span>`;
                content += obj['warranty'];
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
                    <div class="col-12 border boxShadow">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="font30">施工日期</th>
                                    <th class="font30">施工廠商</th>
                                    <th class="font30">工時</th>
                                    <th class="font30">類別</th>
                                    <th class="font30">維修內容</th>
                                    <th class="font30">維修進度</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <th class="font30" scope="row">9/29</th>
                                    <td class="font30"><input type="text" id="new" class="form-control"></td>
                                    <td class="font30"><input type="text" id="new" class="form-control"></td>
                                    <td class="font30"><input type="text" id="new" class="form-control"></td>
                                    <td class="font30"><input type="text" id="new" class="form-control"></td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td class="font30"></td>
                                    <td class="font30"></td>
                                    <td class="font30"></td>
                                    <td class="font30"></td>
                                    <td class="font30"></td>
                                </tr>
                                <tr>
                                    <th class="font30" scope="row" colsoan="3">合計</th>
                                    <td class="font30" colspan="2">XXX</td>
                                </tr>
                            </tbody>
                            <!--Table body-->
                        </table>
                    </div>
                    <div class="col-12 ">
                        <div class="row">
                            <div class="col-12">
                                <span>聯絡情況:</span>
                            </div>
                            <div class="col-12">
                                <table class="table table-bordered">
                                    
                                    <tr>
                                        <th class="font30">2018/09/29</th>
                                        <th>
                                            <div class="row">
                                                <div class="col-8"><input type="text" /></div>
                                                <div class="col-4"><button type="button" class="btn btn-indigo font30">送出</button></div>
                                            </div>
                                        </th>
                                    </tr>
                                </table>
                            </div>
                        </div>`;
                if (obj['check_reserve'] == 0) {
                    content += `
                        <div class="row mx-2">
                            <div class="col-7" ">
                                <div id="repair_type" col-12 selectfont></div>
                                <div id="repair_company"></div>
                            </div>
                            <div class="col-5 font30" id="applydate">
                                
                            </div>
                        </div>
                    `;
                }
                else if (obj['check_finish'] != 10) {
                    content += `
                        <div>
                            <a href="RepairOrder.html"><button type="button" class="btn btn-indigo font30">完成維修</button></a>
                            <a href="index.html"><button type="button" class="btn btn-indigo font30">待完成</button></a>
                            <a href="index.html"><button type="button" class="btn btn-danger font30">案件退回</button></a>
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

                $(document).ready(function() {
                    $('.mdb-select').material_select();
                });
                // $('#input_starttime1').pickatime({});
                // $('#input_starttime2').pickatime({});
                // $('#input_starttime3').pickatime({});
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
