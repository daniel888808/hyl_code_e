class notice_show_notice_page_E extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;
    }
    prepareArgs() {
        this.php_action = "do_select_action";
        this.php = true;
    }

    ajax_success(xhttp) {
        var data = null;
        var allDatas = JSON.parse(xhttp.responseText);
        console.log(allDatas);
        try {
            if (allDatas['status_code'] === 0) {
                for (var allData in allDatas['data_set']) {
                    console.log(allDatas['data_set'][allData]);
                    for (var oneDate in allDatas['data_set'][allData][3]) {
                        var end_datetime = allDatas['data_set'][allData][3][oneDate]['reservetime'].substring(5, 7) + "/" + allDatas['data_set'][allData][3][oneDate]['reservetime'].substring(8, 10);
                        var notice_title;
                        // console.log(end_datetime);
                        if (allDatas['data_set'][allData][3][oneDate]['repair_content'].length > 8) {
                            notice_title = allDatas['data_set'][allData][3][oneDate]['repair_content'].substring(0, 8) + "...";
                        }
                        else {
                            notice_title = allDatas['data_set'][allData][3][oneDate]['repair_content'];
                        }
                        // console.log(allDatas['data_set'][allData][3][oneDate]['repair_content']);
                        // console.log(notice_title);
                        // console.log(end_datetime);
                        data = data + `
                                  <div class="list-group font-weight-bold pt-0">
                                      <a onclick="(new notice_show_select_page('notice','show_select_page','body','${allDatas['data_set'][allData][1][oneDate]['id']}','${allDatas['data_set'][allData][1][oneDate]['type']}','${allDatas['data_set'][allData][0]['content']}','${allDatas['data_set'][allData][3][oneDate]['repair_content']}','${allDatas['data_set'][allData][0]['content']}','${allDatas['data_set'][allData][2]['name']}','${end_datetime}','${allDatas['userData'][2][0]['name']}','${allDatas['userData'][1][0]['number']}')).run()">
                                             `;
                        if (allDatas['data_set'][allData][1][oneDate]['type'] === "finish") {
                            data = data + `<div class="list-group-item text-dark py-2 list-group-item-warning">${notice_title} <span class="float-right"> 維修單完成 ${end_datetime} </span></div>`;
                        }
                        else if (allDatas['data_set'][allData][1][oneDate]['type'] === "confirm") {
                            data = data + `<div class="list-group-item text-dark py-2 list-group-item-success">${notice_title} <span class="float-right"> 時間確認 ${end_datetime} </span></div>`;
                        }
                        else if (allDatas['data_set'][allData][1][oneDate]['type'] === "cancel") {
                            data = data + `<div class="list-group-item text-white py-2 list-group-item- red accent-4s">${notice_title} <span class="float-right"> 取消維修單 ${end_datetime} </span></div>`;
                        }
                        else {
                            data = '查無值...';
                        }
                        data = data + `     
                                        </a>     
                                  </div>`;

                        data = data.slice(5);
                    }
                }
                console.log(data);
            }
            else {
                data = "<h1>此帳號無維修通知</h1>";
            }
        }
        catch (e) {
            console.log(e);
        }
        // var str = `
        //         </div>
        //         <!-- /.通知 -->
        //         <div class="tab-pane fade" id="notice" role="tabpanel">
        //             <div class="my-0 py-0 pt-3">
        //                 <select class="mdb-select">
        //                     <option value="" disabled selected>全部顯示</option>
        //                     <option value="1">全部顯示</option>
        //                     <option value="2">完成通知</option>
        //                     <option value="3">時間通知</option>
        //                 </select>
        //             </div>

        //           `;
        document.getElementById(this.position_id).innerHTML = data;
    }
    ajax_error(xhttp) {
        // console.log(xhttp.responseText);
    }
}
