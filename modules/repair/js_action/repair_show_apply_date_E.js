class repair_show_apply_date_E extends ActionHandler {
    constructor(module, action, position_id, repair_history_id) {
        super(module, action);
        this.position_id = position_id;
        this.repair_history_id = repair_history_id;
    }
    prepareArgs() {
        this.php = true;
        this.addArgs('repair_history_id', this.repair_history_id);
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
                var content = "";
                var atime1 = obj['apply_date'][0]['start_Time'];
                var atime2 = obj['apply_date'][0]['end_Time'];
                console.log(st(atime1));
                content += `
                     <div class="col-12 mt-4">
                                    <span>選擇適用時間</span>
                                </div>
                                <div class=" mt-2 ">
                                    <div class="form-check">
                                        <input class="form-check-input " name="group100" type="radio" id="radio100">
                                        <label class="form-check-label font30" for="radio100">` + st(atime1) + ` (` + st_time(atime1) + `-` + st_time(atime2) + `)<br><input placeholder="確定維修時間" type="text" id="input_starttime1" class="form-control timepicker"></label>
                                    </div>
                                    <script>$('#input_starttime1').pickatime({});</script>
                                </div>
                                `;
                if (obj['apply_date'][1]) {
                    var btime1 = obj['apply_date'][1]['start_Time'];
                    var btime2 = obj['apply_date'][1]['end_Time'];
                    content += `
                         <div class=" mt-3 ">
                                    <div class="form-check">
                                        <input class="form-check-input " name="group100" type="radio" id="radio101">
                                        <label class="form-check-label font30" for="radio101">` + st(btime1) + ` (` + st_time(btime1) + `-` + st_time(btime2) + `)<input placeholder="確定維修時間" type="text" id="input_starttime2" class="form-control timepicker"></label>
                                    </div>
                                </div>
                                <script>$('#input_starttime2').pickatime({});</script>
                    `
                }
                if (obj['apply_date'][2]) {
                    var ctime1 = obj['apply_date'][2]['start_Time'];
                    var ctime2 = obj['apply_date'][2]['end_Time'];
                    content += `
                         <div class=" mt-3 ">
                                    <div class="form-check">
                                        <input class="form-check-input " name="group100" type="radio" id="radio101">
                                        <label class="form-check-label font30" for="radio101">` + st(ctime1) + ` (` + st_time(ctime1) + `-` + st_time(ctime2) + `)<input placeholder="確定維修時間" type="text" id="input_starttime3" class="form-control timepicker"></label>
                                    </div>
                                </div>
                                <script>$('#input_starttime3').pickatime({});</script>
                    `
                }
                content += `
                               
                                <div class=" mt-3 ">
                                    <div class="form-check">
                                        <input class="form-check-input " name="group100" type="radio" id="radio102">
                                        <label class="form-check-label font30" for="radio102">其他:</label>
                                        <div class="form-check">
                                            <div class="row my-0">
                                                <div class="col-6">
                                                    <input type="date" class="form-control" id="month1" placeholder="Enter month">
                                                </div>
                                                <div class="col-6">
                                                    <input placeholder="時間" type="text" id="input_starttime3" class="form-control timepicker">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    
                                <div class=" mt-2 ">
                                    <button type="button" class="btn btn-indigo font30">確認</button>
                                </div>
                `;
                $('#input_starttime1').pickatime({});
                $('#input_starttime2').pickatime({});
                $('#input_starttime3').pickatime({});

                $('#' + this.position_id).html(content);

                function st(tt1) {
                    var tt3;
                    tt3 = tt1.split(" ")[0].split("-")[0] + "/" + tt1.split(" ")[0].split("-")[1] + "/" + tt1.split(" ")[0].split("-")[2];
                    return tt3;
                };

                function st_time(tt1) {
                    var tt3;
                    tt3 = tt1.split(" ")[1].split(":")[0] + ":" + tt1.split(" ")[1].split(":")[1];
                    return tt3;
                };







            }

            else {
                $('#' + this.position_id).html(obj['status_message']);
            }

            //this.loadModuleScript("case", "do_select_action");
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
