class case_show_select_page_E extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;

    }
    prepareArgs() {
        this.php = true;
        this.php_action = 'show_select_page_E';

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
                content += `<div class="container pt-3">
                <div class="row mt-4">
                    <div class="col-4">
                        <span class="h2">案件</span>
                    </div>
                    <div class="switch col-6">
                        <ul class="nav nav-tabs nav-justified bg-indigo">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#Yet_Finish" role="tab">待完成</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#New" role="tab">新案件</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row tab-content card mt-4" id="min-h">
                    <!--Panel 1-->
                    <div class="tab-pane fade in show active" id="Yet_Finish" role="tabpanel">
                        <table class="table table-striped text-center">
                            <thead>
                                <tr>
                                    <th scope="col" class="py-1 font-weight-bold h4">建案名稱 </th>
                                    <th scope="col" class="py-1 font-weight-bold h4">維修日期 </th>
                                    <th scope="col" class="py-1 font-weight-bold h4">維修事項</th>
                                    <th scope="col" class="py-1 font-weight-bold h4">維修進度</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                世紀峰華
                                            </a>
                                    </th>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                2018/02/11
                                            </a>
                                    </th>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                壁癌處理
                                            </a>
                                    </td>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                維修中
                                            </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                JIA
                                            </a>
                                    </th>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                               2018/02/02
                                           </a>
                                    </th>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            油漆工程
                                        </a>
                                    </td>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            維修中
                                        </a>
                                        </i>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                世紀峰華
                                            </a>
                                    </th>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                 2018/01/03
                                            </a>
                                    </th>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                水電處理
                                        </a>
                                    </td>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                        維修中
                                    </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                世紀峰華
                                            </a>
                                    </th>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            2017/12/04
                                        </a>
                                    </th>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            電器處理
                                        </a>
                                    </td>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            維修中
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                世紀之星
                                            </a>
                                    </th>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            2017/11/05
                                        </a>
                                    </th>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            家具維修
                                        </a>
                                    </td>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            待維修
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                                HAUS
                                            </a>
                                    </th>
                                    <th class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            2017/11/01
                                        </a>
                                    </th>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            其他維修
                                        </a>
                                    </td>
                                    <td class="py-1 fontsm">
                                        <a href="E_progress.html">
                                            待維修
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm">
                                        <a href="casefinish.html">
                                                舞樂天
                                            </a>
                                    </th>
                                    <th class="py-1 fontsm"><a href="E_progress.html">2017/10/17</a>
                                    </th>
                                    <td class="py-1 fontsm"><a href="E_progress.html">其他維修</a>
                                    </td>
                                    <td class="py-1 fontsm"><a href="E_progress.html">待維修</a>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--/.Panel 1-->
                    <!--Panel 2-->
                    <div class="tab-pane fade" id="New" role="tabpanel">
                        <table class="table table-striped text-center">
                            <thead>
                                <tr>
                                    <th scope="col" class="py-1 font-weight-bold h4">報修類別</th>
                                    <th scope="col" class="py-1 font-weight-bold h4">待修情形</th>
                                    <th scope="col" class="py-1 font-weight-bold h4">建案名稱 </th>
                                    <th scope="col" class="py-1 font-weight-bold h4">戶號</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="">
                                    <th class="py-1 fontsm "><a href="case.html">水電類</a></th>
                                    <td class="py-1 fontsm "><a href="case.html">水管漏水</a></td>
                                    <td class="py-1 fontsm "><a href="case.html">豐花園</a></td>
                                    <td class="py-1 fontsm "><a href="case.html">3-9</a></td>

                                </tr>
                                <tr>
                                    <th class="py-1 fontsm "><a href="case.html">水電類</a></th>
                                    <td class="py-1 fontsm "><a href="case.html">水管漏水</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">七期</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">3-12</a></td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm "><a href="case.html">油漆類</a></th>
                                    <td class="py-1 fontsm "><a href="case.html">壁癌</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">豐花園</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">3-13</a></td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm "><a href="case.html">電機類</a></th>
                                    <td class="py-1 fontsm "><a href="case.html">浴室抽風損壞</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">水岸</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">8-13</a></td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm "><a href="case.html">水電類</a></th>
                                    <td class="py-1 fontsm "><a href="case.html">水龍頭爆炸</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">水岸</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">13-13</a></td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm "><a href="case.html">其他類</a></th>
                                    <td class="py-1 fontsm "><a href="case.html">大門斷裂</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">豐花園</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">5-13</a></td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm "><a href="case.html">水電類</a></th>
                                    <td class="py-1 fontsm "><a href="case.html">浴室排水堵塞</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">七期</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">3-6</a></td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm "><a href="case.html">水電類</a></th>
                                    <td class="py-1 fontsm "><a href="case.html">水管漏水</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">七期</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">12-1</a></td>
                                </tr>
                                <tr>
                                    <th class="py-1 fontsm "><a href="case.html">水電類</a></th>
                                    <td class="py-1 fontsm "><a href="case.html">水管漏水</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">七期</a></td>
                                    <td class="py-1 fontsm"><a href="case.html">8-1</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--/.Panel 2-->
                </div>
            </div>
        </div>`;

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
