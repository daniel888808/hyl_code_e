class repair_company_show_repair_company_E extends ActionHandler {
    constructor(module, action, position_id, repair_type_id) {
        super(module, action);
        this.position_id = position_id;
        this.repair_type_id = repair_type_id;
    }
    prepareArgs() {
        this.php = true;
        var value1 = $("select[name='select_repair_type']").val(); //抓select的值
        this.addArgs('repair_type', this.repair_type_id);
        //this.addArgsbyid('repair_type_id');
        //this.addArgs('repair_type_id', this.repair_type_id);
    }
    ajax_success(xhttp) {
        try {
            var json_str = xhttp.responseText;
            console.log(json_str);
            var obj = JSON.parse(json_str);
            if (obj['status_code'] == 0) {
                var ds = obj['repair_company'];
                console.log(obj);
                //this.loadModuleScript("home", "show_home_page_E");
                var content = "";
                content += `
                .current {
            color: #fff;
            background: #337ab7;
        }

                                <table class="table">
                                    <tr>
                                        <th scope="col" class="px-2 font30">廠商名稱</th>
                                        <th scope="col" class="pl-2 font30">廠商電話</th>
                                        <th scope="col" class="pl-2 font30">詳細</th>
                                    </tr>
                                    </thead>
                                    <tbody>`;
                for (var i = 0; i < ds.length; i++) {
                    content += `
                                        <tr onclick="" id="tr` + i + `">
                                            <th class="pt-4 pl-3 font30">` + ds[i]['name'] + `</th>
                                            <td class="pt-4 font30">` + ds[i]['phone'] + `</td>
                                            <td>
                                                <div class="btn-group" role="group" aria-label="Basic example">
                                                    <a type="button" class="btn bg-transparent p-2">
                                                        <i class="fa fa-file fa-lg text-dark"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>

                                `;
                }

                content += `
                                    </tbody>
                                </table>
                `;
                $('#' + this.position_id).html(content);
                $('#tr0').on('click', function() {
                    $(this).addClass("current").siblings().removeClass("current");
                });

                //$("#tr0").css({ background: '#FFF' });
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
