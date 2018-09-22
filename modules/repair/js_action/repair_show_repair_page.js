class repair_show_repair_page extends ActionHandler {
    constructor(module, action, position_id, repair_type, repair_id) {
        super(module, action);
        this.position_id = position_id;
        this.repair_type = repair_type;
        this.repair_id = repair_id;
    }
    prepareArgs() {
        this.php = true;
        this.php_action = 'do_select_action';
    }
    ajax_success(json_str) {

        $(document).ready(function() {
            $("select").on("change", function() {
                var s = $("select[name='select1']").val();
                var r = s;
                console.log(r);
            });
            $("#progressbarTWInput").change(function() {
                $("#preview_progressbarTW_imgs").html(""); // 清除預覽
                readURL(this);
            });

            function readURL(input) {
                if (input.files && input.files.length >= 0) {
                    for (var i = 0; i < input.files.length; i++) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            var img = $("<img width='300' height='200'>").attr('src', e.target.result);
                            $("#preview_progressbarTW_imgs").append(img);
                        }
                        reader.readAsDataURL(input.files[i]);
                    }
                }
                else {
                    var noPictures = $("<p>目前沒有圖片</p>");
                    $("#preview_progressbarTW_imgs").append(noPictures);
                }
            }
            var txtId = 1;
            //add input block in showBlock
            $("#btn").click(function() {
                $("#showBlock").append('<div class="row" id="div' + txtId + '"><div class="col-3 p-0"><input type="date" class="form-control" name="test[]" id="month1" placeholder="Enter month" /></div><div class="col-3 p-0"><input type="text" class="form-control timepicker" name="test[]" id="input_starttime1-1" placeholder="起始時間"/></div><div class="col-3 p-0"><input type="text" class="form-control timepicker" name="test[]" id="input_starttime1-2" placeholder="結束時間"/></div><div class="col-3 p-0"><button type="button"  class="btn btn-primary m-0"  style="height:38px" value="del" onclick="deltxt(' + txtId + ')">X</button></div></div></br>');
                txtId++;
            });

            //remove div
            function deltxt(id) {
                $("#div" + id).remove();
            }
        });
        try {
            var json_str = json_str.responseText;
            var obj = JSON.parse(json_str);
            // alert(obj['status_code']);
            if (obj['status_code'] === 0) {
                var ds = obj['data_set'];
                var str = `<header>
                            <!-- Navbar -->
                            <nav class="navbar bgdark text-white">
                                <div onclick="(new home_show_home_page('home','show_home_page','body')).run()">
                                <i class="fa fa-chevron-left text-white" aria-hidden="true"></i>
                                </div>
                                <span class="h6 m-auto pr-3 py-2"> 維修單</span>
                            </nav>
                            <!-- /.Navbar -->
                            </header>   
                            <div class="container px-3 mt-2">
                                <div class="form-group">
                                    <form>
                                    <div class="row">
                                            <div class="col-4">
                                                <label class="font-weight-bold">維修類型:</label>
                                            </div>
                                            <div class="col-8 form-group">`;
                str += '<select class="mdb-select" name="select1">';
                for (var index in ds) {
                    if (ds[index]['name'] == this.repair_type) {
                        str += '<option value="' + ds[index]['id'] + '"  selected>' + ds[index]['namech'] + '</option>';
                    }
                    else {
                        str += '<option value="' + ds[index]['id'] + '">' + ds[index]['namech'] + '</option>';
                    }
                }
                str += '</select>';
                str += `</div></div>
                        <div class="row my-0" id="showBlock">
                                                <label for="time" class="font-weight-bold col-12">請輸入您方便的時間<a type="button" id="btn" value="addItem"><i class="fa fa-plus" aria-hidden="true"></i></a></label>
                                                <div class="col-4">
                                                    <input type="date" class="form-control" id="month1" placeholder="Enter month">
                                                </div>
                                                <div class="col-4" >
                                                    <input placeholder="起始時間" type="text" id="input_starttime1-1" class="form-control timepicker">
                                                </div>
                                                <div class="col-4">
                                                    <input placeholder="結束時間" type="text" id="input_starttime1-2" class="form-control timepicker">
                                                </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col-4" >
                                                <label class="font-weight-bold ">待修狀況:</label>
                                            </div>
                                            <div class="col-8" >
                                                <input type="text" id="case_title" name="" length="30" style="border:1px solid #ced4da;border-radius:2px"/>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label class="font-weight-bold ">說明:</label>
                        
                                            <div class="md-form mt-1 mb-3">
                                                <i class="fa fa-pencil prefix grey-text mt-2"></i>
                                                <textarea type="text" id="case_content" class="form-control md-textarea ml-4" rows="4"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="md-form row">
                                               <input type="file" id="progressbarTWInput" accept="image/gif, image/jpeg, image/png" multiple/ >
                                               <div id="preview_progressbarTW_imgs" style="width:100%; height: 300px; overflow:scroll;">
                                                   <p>目前沒有圖片</p>
                                               </div>
                                            </div>
                                        </div>
                                       <button type="button"  class="btn btn-primary rounded" onclick="(new repair_do_repair_action('repair','do_repair_action','body')).run()">提交</button>
                                    </form>
                                </div>
                            </div>
                                
                            <script>
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
                        
                                //時間
                                $('#input_starttime1-1').pickatime({});
                                $('#input_starttime1-2').pickatime({});
                                $('#input_starttime2-1').pickatime({});
                                $('#input_starttime2-2').pickatime({});
                            </script>
                                `;
                $('#' + this.position_id).html(str);
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

        // document.getElementById(this.position_id).innerHTML = str;

        this.loadModuleScript(this.module, "do_repair_action");
    }
    ajax_error(msg) {

    }
}
