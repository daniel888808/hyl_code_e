class news_do_select_action extends ActionHandler {
    constructor(module, action, position_id) {
        super(module, action);
        this.position_id = position_id;

    }
    prepareArgs() {
        this.php = true;
    }
    ajax_success(xhttp) {
        var json_str = xhttp.responseText;
        var obj = JSON.parse(json_str);
        var ds = obj['data_set'];



        var str = "";


        for (var i in ds) {

            str += '<div class="row"><div class="col-12"><a href=""><div class="row mt-2"><div class="col px-0"><div class="row border boxShadow mx-1 h-60"><div class="col-5 px-0">';
            str += '<img src="../include/lib/img/03.png" alt="" srcset="" width="85px" height="80px"></div><div class="col-7 pl-0 pr-1 my-0"><h6 class="font-weight-bold my-1">';
            str += ds[i]['topic'] + '</h6><p class="mb-0">' + ds[i]['content'] + '</p></div></div></div></div></a></div></div>';


        }









        document.getElementById(this.position_id).innerHTML = str;

        //document.getElementById('news1').innerHTML = str;
        //document.getElementById('news2').innerHTML = str;
        //document.getElementById('news3').innerHTML = str;
    }



    ajax_error(xhttp) {


    }

}
//(new news_do_select_action('news','do_select_action','news1').run())
