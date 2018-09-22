class case_show_select_page extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;

    }
    prepareArgs() {
        this.php = true;
        this.php_action = 'show_select_page';
        // var value = $('input[name=id]:checked').val();
        // this.addArgs('where_statement', 'id = ' + value);
    }
    ajax_success(xhttp) {
        try {
            var json_str = xhttp.responseText;
            console.log(json_str);
            var obj = JSON.parse(json_str);
            if (obj['status_code'] === 0) {
                var ds = obj['data_set'];
                var content = "";
                var t1;
                var da = new Date();
                var ye = da.getFullYear();
                content += `
    <div class="container">
        <div class="row " id="min-h">
            <div class="col-12 px-0">
                <table class="table table-striped text-center mt-3">
                    <thead>
                        <tr>
                            <th scope="col-4" class="py-1 font-weight-bold h6">報修日期 </th>
                            <th scope="col-4" class="py-1 font-weight-bold h6">維修事項</th>
                            <th scope="col-4" class="py-1 font-weight-bold h6" style="width:120px">維修狀況</th>
                        </tr>
                    </thead>
                    <tshow_area>
                        `;

                for (var i in ds) {

                    t1 = st(ds[i]['start_datetime']);
                    content += `
                    <tr>
                            <td class="py-1 fontsm"><a onclick="(new case_do_select_action('case','do_select_action','body','${ds[i]["id"]}')).run()">${t1} </a></td>
                            <td class="py-1 fontsm"><a onclick="(new case_do_select_action('case','do_select_action','body','${ds[i]["id"]}')).run()">${ds[i]['title']} </a></td>
                            <td class="py-1 fontsm"><a onclick="(new case_do_select_action('case','do_select_action','body','${ds[i]["id"]}')).run()"><i class = "fa fa-check light-blue-text" aria-hidden="true"></a></i></td>
                        </tr>

                                `;
                }
                content += `                
                    </tshow_area>
                </table>
            </div>
        </div>
    </div>
      `;

                function st(tt1) {
                    var tt3;
                    if (tt1.split("-", 1) == ye) { tt3 = tt1.split(" ")[0].split("-")[1] + "-" + tt1.split(" ")[0].split("-")[2] + " " + tt1.split(" ")[1].split(":")[0] + ":" + tt1.split(" ")[1].split(":")[1]; }
                    else {
                        tt3 = tt1;
                    }
                    return tt3;
                };

                $('#' + this.position_id).html(content);

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
