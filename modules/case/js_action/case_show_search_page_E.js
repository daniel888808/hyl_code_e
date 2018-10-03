class case_show_search_page_E extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;

    }
    prepareArgs() {
        this.php = true;
        this.php_action = 'show_search_page_E';

    }
    ajax_success(xhttp) {
        try {
            var json_str = xhttp.responseText;
            console.log(json_str);
            var obj = JSON.parse(json_str);
            if (obj['status_code'] === 0) {
                var ds = obj['data_set'];
                var content = "";
                console.log(ds);

                content += `    
        <div class="container pt-5 mx-5 my-0 py-0 px-0">

            <div class="">
                <h4>搜尋</h4>
                <div class="row">
                    <div class="form-check col-6">
                        <input name="group2" type="radio" class="form-check-input with-gap" id="radioWithGap4" checked="checked">
                        <label class="form-check-label" for="radioWithGap4">案件</label>
                    </div>

                    <div class="form-check col-6">
                        <input name="group2" type="radio" class="form-check-input with-gap" id="radioWithGap5">
                        <label class="form-check-label" for="radioWithGap5">住戶</label>
                    </div>
                </div>
                <div class="row">
                    <div class="form-check col-12">
                        <input name="group2" type="radio" class="form-check-input with-gap" id="radioWithGap6">
                        <label class="form-check-label" for="radioWithGap6">維修廠商</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        案名
                        <select class="mdb-select">
                    <option value="" disabled selected></option>
                    <option value="1">所有案名</option>
                    <option value="2">舞樂天</option>
                    <option value="3">世紀風華</option>
                    <option value="3">JIA</option>
                </select>
                    </div>
                    <div class="col-6">
                        戶號
                        <input class="form-control " type="text">
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        維修完成日期
                        <input type="date" id="new" class="form-control col-md-5">
                    </div>
                    <div class="col-6">
                        聯絡人
                        <input class="form-control " type="text ">
                    </div>
                </div>
                <button type="button" class="btn btn-indigo">搜尋</button>

                <div class="col-12" id="min-h">

                    <table class="table  text-center">
                        <tr>
                            <th scope="col" class="px-2">建案名稱</th>
                            <th scope="col" class="pl-2">戶名</th>
                            <th scope="col" class="pl-2">聯絡人</th>
                            <th scope="col" class="px-0">詳細狀況</th>
                        </tr>
                        </thead>
                    </table>
                    <div class="overFlow">
                        <table class="table  text-center">
                            <tbody>
                                <tr>
                                    <th class="pt-4 pl-3">JIA</th>
                                    <td class="pt-4">3-9</td>
                                    <td class="pt-4">黃麗紅</td>
                                    <td>
                                        <div class="btn-group" role="group" aria-label="Basic example">
                                            <a type="button" class="btn bg-transparent p-2" href="case.html">
                                                    <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="pt-4 pl-3">JIA</th>
                                    <td class="pt-4">3-12</td>
                                    <td class="pt-4">鄭清滿</td>
                                    <td>
                                        <div class="btn-group" role="group" aria-label="Basic example">
                                            <a type="button" class="btn bg-transparent p-2" href="case.html">
                                                     <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="pt-4 pl-3">JIA</th>
                                    <td class="pt-4">3-9</td>
                                    <td class="pt-4">黃麗紅</td>
                                    <td>
                                        <div class="btn-group" role="group" aria-label="Basic example">
                                            <a type="button" class="btn bg-transparent p-2" href="case.html">
                                                    <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="pt-4 pl-3">JIA</th>
                                    <td class="pt-4">3-12</td>
                                    <td class="pt-4">鄭清滿</td>
                                    <td>
                                        <div class="btn-group" role="group" aria-label="Basic example">
                                            <a type="button" class="btn bg-transparent p-2" href="case.html">
                                                     <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="pt-4 pl-3">JIA</th>
                                    <td class="pt-4">3-9</td>
                                    <td class="pt-4">黃麗紅</td>
                                    <td>
                                        <div class="btn-group" role="group" aria-label="Basic example">
                                            <a type="button" class="btn bg-transparent p-2" href="case.html">
                                                    <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="pt-4 pl-3">JIA</th>
                                    <td class="pt-4">3-12</td>
                                    <td class="pt-4">鄭清滿</td>
                                    <td>
                                        <div class="btn-group" role="group" aria-label="Basic example">
                                            <a type="button" class="btn bg-transparent p-2" href="case.html">
                                                     <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="pt-4 pl-3">JIA</th>
                                    <td class="pt-4">3-9</td>
                                    <td class="pt-4">黃麗紅</td>
                                    <td>
                                        <div class="btn-group" role="group" aria-label="Basic example">
                                            <a type="button" class="btn bg-transparent p-2" href="case.html">
                                                    <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="pt-4 pl-3">JIA</th>
                                    <td class="pt-4">3-12</td>
                                    <td class="pt-4">鄭清滿</td>
                                    <td>
                                        <div class="btn-group" role="group" aria-label="Basic example">
                                            <a type="button" class="btn bg-transparent p-2" href="case.html">
                                                     <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="pt-4 pl-3">JIA</th>
                                    <td class="pt-4">3-9</td>
                                    <td class="pt-4">黃麗紅</td>
                                    <td>
                                        <div class="btn-group" role="group" aria-label="Basic example">
                                            <a type="button" class="btn bg-transparent p-2" href="case.html">
                                                    <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="pt-4 pl-3">JIA</th>
                                    <td class="pt-4">3-12</td>
                                    <td class="pt-4">鄭清滿</td>
                                    <td>
                                        <div class="btn-group" role="group" aria-label="Basic example">
                                            <a type="button" class="btn bg-transparent p-2" href="case.html">
                                                     <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                        </div>
                                    </td>
                                </tr>
                        </table>
                    </div>
                
            </div>`;


                $('#' + this.position_id).html(content);

            }
            else {
                $('#' + this.position_id).html(obj['status_message']);
                console.log(obj['data_set']);

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
