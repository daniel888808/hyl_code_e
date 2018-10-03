class notice_show_notice_page_E extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;
    }
    prepareArgs() {
        this.php_action = "do_select_action_E";
        this.php = true;
    }

    ajax_success(xhttp) {
        var data = null;
        var allDatas = JSON.parse(xhttp.responseText);
        console.log(allDatas);
        try {
            if (allDatas['status_code'] === 0) {
                for (var allData in allDatas['data_set']) {
                    var buildingName = allDatas['data_set'][allData]['building'][0]['name'];
                    var caseNamech = allDatas['data_set'][allData]['case']['namech'];
                    var householdNumber = allDatas['data_set'][allData]['household'][0]['number'];
                    var caseTitle = allDatas['data_set'][allData]['case']['title'];

                    if (allDatas['data_set'][allData]['repair'] === []) {
                        return;
                    }
                    for (var repair in allDatas['data_set'][allData]['repair']) {
                        var startTime = allDatas['data_set'][allData]['case']['start_datetime'];


                        startTime = startTime.substring(0, 4) + "/" + startTime.substring(5, 7) + "/" + startTime.substring(8, 10);
                        if (caseTitle.length > 6) {
                            caseTitle = caseTitle.substring(0, 7) + "...";
                        }
                        else {
                            caseTitle = caseTitle;
                        }

                        data = data + `
                                 <div class="list-group font-weight-bold h3">
                                      <a onclick="(new notice_show_select_page_E('notice','show_select_page_E','body','buildingName','startTime','householdNumber',)).run()">
                                             `;
                        if (allDatas['data_set'][allData]['case']['namech'] === "水電報修") {
                            data = data + `<div class="list-group-item list-group-item-success px-1"><span class="text-center" style="width:13%;display:inline-block">${buildingName}</span><span class="text-center" style="displat:inline-block;width:18%;display:inline-block">${householdNumber}</span> ${caseTitle}<span class="float-right">${caseNamech} ${startTime}</span></div>`;
                        }
                        else if (allDatas['data_set'][allData]['case']['namech'] === "電機相關") {
                            data = data + `<div class="list-group-item list-group-item-success px-1"><span class="text-center" style="width:13%;display:inline-block">${buildingName}</span><span class="text-center" style="displat:inline-block;width:18%;display:inline-block">${householdNumber}</span> ${caseTitle}<span class="float-right">${caseNamech} ${startTime}</span></div>`;
                        }
                        else if (allDatas['data_set'][allData]['case']['namech'] === "安裝工程") {
                            data = data + `<div class="list-group-item list-group-item-success px-1"><span class="text-center" style="width:13%;display:inline-block">${buildingName}</span><span class="text-center" style="displat:inline-block;width:18%;display:inline-block">${householdNumber}</span> ${caseTitle}<span class="float-right">${caseNamech} ${startTime}</span></div>`;
                        }
                        else if (allDatas['data_set'][allData]['case']['namech'] === "公設維修") {
                            data = data + `<div class="list-group-item list-group-item-success px-1"><span class="text-center" style="width:13%;display:inline-block">${buildingName}</span><span class="text-center" style="displat:inline-block;width:18%;display:inline-block">${householdNumber}</span> ${caseTitle}<span class="float-right">${caseNamech} ${startTime}</span></div>`;
                        }
                        else if (allDatas['data_set'][allData]['case']['namech'] === "家具維修") {
                            data = data + `<div class="list-group-item list-group-item-success px-1"><span class="text-center" style="width:13%;display:inline-block">${buildingName}</span><span class="text-center" style="displat:inline-block;width:18%;display:inline-block">${householdNumber}</span> ${caseTitle}<span class="float-right">${caseNamech} ${startTime}</span></div>`;
                        }
                        else if (allDatas['data_set'][allData]['case']['namech'] === "清潔服務") {
                            data = data + `<div class="list-group-item list-group-item-success px-1"><span class="text-center" style="width:13%;display:inline-block">${buildingName}</span><span class="text-center" style="displat:inline-block;width:18%;display:inline-block">${householdNumber}</span> ${caseTitle}<span class="float-right">${caseNamech} ${startTime}</span></div>`;
                        }
                        else if (allDatas['data_set'][allData]['case']['namech'] === "油漆工程") {
                            data = data + `<div class="list-group-item list-group-item-success px-1"><span class="text-center" style="width:13%;display:inline-block">${buildingName}</span><span class="text-center" style="displat:inline-block;width:18%;display:inline-block">${householdNumber}</span> ${caseTitle}<span class="float-right">${caseNamech} ${startTime}</span></div>`;
                        }
                        else if (allDatas['data_set'][allData]['case']['namech'] === "其他維修") {
                            data = data + `<div class="list-group-item list-group-item-success px-1"><span class="text-center" style="width:13%;display:inline-block">${buildingName}</span><span class="text-center" style="displat:inline-block;width:18%;display:inline-block">${householdNumber}</span> ${caseTitle}<span class="float-right">${caseNamech} ${startTime}</span></div>`;
                        }
                        else {
                            data = '查無值...';
                        }
                        data = data + `     
                                        </a> </div>`;

                        data = data.slice(3);

                    }

                }
            }
            else {
                data = "<h1>目前無通知</h1>";
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
        document.getElementById('notice').innerHTML = data;
    }
    ajax_error(xhttp) {
        // console.log(xhttp.responseText);
    }
}
