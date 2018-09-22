class case_do_select_action extends ActionHandler {
    constructor(module, action, position_id, case_id) {
        super(module, action);
        this.position_id = position_id;
        this.case_id = case_id;

    }
    prepareArgs() {
        this.php = true;
        this.php_action = 'do_select_action';
        console.log(this.case_id);
        this.addArgs('cid', this.case_id)
        // this.addArgs('where_statement', 'id = ' + value);
    }
    ajax_success(json_str) {
        try {
            var json_str = json_str.responseText;
            var obj = JSON.parse(json_str);
            if (obj['status_code'] === 0) {
                var ds = obj['data_set'];
                console.log(json_str);
                var content = `
               <header>
                            <!-- Navbar -->
                            <nav class="navbar bgdark text-white">
                                <div onclick="(new home_show_home_page('home','show_home_page','body','record')).run()">
                                <i class="fa fa-chevron-left text-white" aria-hidden="true"></i>
                                </div>
                                <span class="h6 m-auto pr-3 py-2"> 維修單</span>
                            </nav>
                            <!-- /.Navbar -->
                            </header>
                  <!-- /Start your project here-->
    <div class="container mt-3">
        <div class="form-group">
            <form>
                <!--Textarea with icon prefix-->
                <div class="md-form my-0">
                    <label for="textareaPrefix" class="mb-0">你的狀況</label>
                    <i class="fa fa-pencil prefix"></i>`;


                content += `
                    <textarea type="text" id="textareaPrefix" class="form-control md-textarea my-0" rows="3" readonly="readonly">${ds[0]['content']}</textarea>
						</div>
						      <label for="time" class="mt-1">您方便的時間:</label>
						`;
                content += "<div>日期:<input type='text' class='form-control my-0' id='month1' placeholder='Enter month' readonly='readonly' value='" + ds[0]['start_datetime'] + "'></div>";
                content += "<div>維修內容:<input type='text' class='form-control my-0' id='month1' placeholder='Enter month' readonly='readonly' value='" + ds[0]['title'] + "'></div>";
                if (ds[0]['status'] == "finish") {
                    content += "<div>維修狀態追蹤:<input type='text' class='form-control my-0' id='month1' placeholder='Enter month' readonly='readonly' value='完成'></div>";

                }
                else {
                    content += "<div>維修狀態追蹤:<input type='text' class='form-control my-0' id='month1' placeholder='Enter month' readonly='readonly' value='未完成'></div>";
                }



                if (ds[0]['rank'] == null) {
                    content += ``;
                }
                else {
                    content += `<div>評分:</div>
                        <div>
                            <!--沒辦法就暫時用這個簡單版的 -->
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <!--沒辦法就暫時用這個簡單版的 -->
                        </div>
                            `;

                }
                content += `
                    <a onclick="(new home_show_home_page('home','show_home_page','body','record')).run()"><button type="button" class="btn btn-primary mt-3">確定</button></a>
                    </form>
                    </div>
                    </div>
                           `;

                $('#' + this.position_id).html(content);
            }

            else {
                $('#' + this.position_id).html(obj['status_message']);
            }
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
