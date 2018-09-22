class notice_show_select_page extends ActionHandler {
    constructor(module, action, position_id, id, type, title, repair_title, content, repairCompany, end_datetime, building_header, building_footer) {
        super(module, action);
        this.position_id = position_id;
        this.id = id;
        this.type = type;
        this.title = title;
        this.repair_title = repair_title;
        this.content = content;
        this.repairCompany = repairCompany;
        this.end_datetime = end_datetime;
        this.building = building_header + " " + building_footer;
        console.log(this.building);
    }
    prepareArgs() {
        this.php = false;
    }
    showResult() {
        var str = "";

        if (this.type === "finish") {
            str += `
        <!--/. Sidebar navigation -->
        <!-- Navbar -->

        <nav class="navbar bgdark text-white py-1" style="height:51px">
      <div onclick="(new home_show_home_page('home','show_home_page','body','notice')).run()">
        <i class="fa fa-chevron-left text-white" aria-hidden="true"></i>
    </div>
            <span class="h6 m-auto pr-3">
                   評價
            </span>
        </nav>
        <!-- /.Navbar -->
    </header>
    <div class="row mr-1 ml-1">
        <div class="col-12 border boxShadow rounded p-3">
            <p class="h6">此次維修已完成，請給予我們評價和意見，感謝您!</p>

        </div>
        <div class="col-12 mt-2 font-weight-bold">
            維修問題:<input type="text" class="form-control my-0 pb-0" id="month1" placeholder="Enter month" readonly="readonly" value="${this.title}">
            <!--<label>Example label</label> -->
        </div>
        <div class="col-12 mt-2 font-weight-bold">
            當前維修項目:<input type="text" class="form-control my-0 pb-0" id="month1" placeholder="Enter month" readonly="readonly" value="${this.repair_title}">
            <!--<label>Example label</label> -->
        </div>
        <div class="col-12 mt-2 font-weight-bold">
            維修內容:
              <textarea type="text" id="materialFormContactMessageEx" class="form-control" style="background-color:#e9ecef" rows="4" readonly="readonly">${this.content}</textarea>
               
            <!--<label>Example label</label> -->
        </div>
        <div class="col-12 mt-2 font-weight-bold">
            地點:<input type="text" class="form-control my-0 pb-0" id="month1" placeholder="Enter month" readonly="readonly" value="${this.building}">
            <!--<label>Example label</label> -->
        </div>
        <div class="col-12 mt-2 font-weight-bold">
            日期時間:<input type="text" class="form-control my-0" id="month1" placeholder="Enter month" readonly="readonly" value="${this.end_datetime}">
            <!--<label>Example label</label> -->
        </div>
        <div class="col-12 mt-2 font-weight-bold">
            維修廠商:<input type="text" class="form-control my-0" id="month1" placeholder="Enter month" readonly="readonly" value="${this.repairCompany}">
            <!--<label>Example label</label> -->
        </div>
        <div class="col-12 mt-2 font-weight-bold">
            評價:
            <!--<div>
                <fieldset class="rating">
                    <input type="radio" id="star5" name="rating" value="5" /><label class="full p-0" for="star5" title="Awesome - 5 stars"></label>
                    <input type="radio" id="star4" name="rating" value="4" /><label class="full" for="star4" title="Pretty good - 4 stars"></label>
                    <input type="radio" id="star3" name="rating" value="3" /><label class="full" for="star3" title="Meh - 3 stars"></label>
                    <input type="radio" id="star2" name="rating" value="2" /><label class="full" for="star2" title="Kinda bad - 2 stars"></label>
                    <input type="radio" id="star1" name="rating" value="1" /><label class="full" for="star1" title="Sucks big time - 1 star"></label>
                </fieldset>
                <br>
            </div>-->
            <!--沒辦法就暫時用這個簡單版的 -->
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <!--沒辦法就暫時用這個簡單版的 -->
        </div>
        <div class="col-12 mt-2 font-weight-bold">
            意見回復:
            <textarea type="text" id="materialFormContactMessageEx" class="form-control md-textarea" rows="5"></textarea>

        </div>
        <a href="testindex.html "><button type="button " class="btn btn-primary rounded ">送出</button></a>

    </div>
  	`
        }
        else if (this.type === "cancel") {
            str += `<!--/. Sidebar navigation -->
<!-- Navbar -->
<nav class="navbar bgdark text-white py-1" style="height:51px">
    <div onclick="(new home_show_home_page('home','show_home_page','body','notice')).run()">
        <i class="fa fa-chevron-left text-white" aria-hidden="true"></i>
    </div>
    
    <span class="h6 m-auto pr-3">
        報修取消通知
    </span>
</nav>
<!-- /.Navbar -->
</header>

<div class="container mt-2">
    <div class="row mr-1 ml-1">
        <div class="col-12 border boxShadow rounded p-3">
            <p class="h5">報修取消通知</p>
            <p class="h6">我們將幫您取消維修服務</p>
            <div class="fclass="mt-1 font-weight-bold"">
                時間:
                <input type="text" class="form-control my-0 pb-0" id="month1" placeholder="Enter month" readonly="readonly" value="${this.end_datetime}">
            </div>
            <div class="mt-1 font-weight-bold">
                維修項目:
                <input type="text" class="form-control my-0 pb-0" id="month1" placeholder="Enter month" readonly="readonly" value="${this.repair_title}">
            </div>
            <div class="mt-1 font-weight-bold">
                維修原因:
                <textarea type="text" id="materialFormContactMessageEx" class="form-control" style="background-color:#e9ecef" rows="4" readonly="readonly">${this.content}</textarea>
            </div>
            <div class="mt-1 font-weight-bold">
                地點:
                <input type="text" class="form-control my-0 pb-0" id="month1 " placeholder="Enter month " readonly="readonly" value="${this.building}">
                <!--<label>Example label</label> -->
            </div>
            <div class="mt-1 font-weight-bold">
                維修廠商:
                <input type="text" class="form-control my-0 pb-0" id="month1 " placeholder="Enter month " readonly="readonly" value="${this.repairCompany}">
                <!--<label>Example label</label> -->
            </div>
        </div>
            <button type="button " class="btn btn-primary rounded" onclick="(new home_show_home_page('home','show_home_page','body','notice')).run()">確認</button>
    </div>
</div>

<!-- /Start your project here-->

  	`;
        }
        else if (this.type === "confirm") {
            str += `<!--/. Sidebar navigation -->
<!-- Navbar -->
<nav class="navbar bgdark text-white py-1" style="height:51px">
    <div onclick="(new home_show_home_page('home','show_home_page','body','notice')).run()">
        <i class="fa fa-chevron-left text-white" aria-hidden="true"></i>
    </div>
    
    <span class="h6 m-auto pr-3">
        報修確認通知
    </span>
</nav>
<!-- /.Navbar -->
</header>

<div class="container mt-2">
    <div class="row mr-1 ml-1">
        <div class="col-12 border boxShadow rounded p-3">
            <p class="h5">報修確認通知</p>
            <p class="h6">我們將會在以下時間為您服務</p>
            <div class="font-weight-bold">
                時間:
                <input type="text" class="form-control my-0 pb-0" placeholder="Enter month" readonly="readonly" value="${this.end_datetime}">
            </div>
            <div class="mt-1 font-weight-bold">
                維修問題:<input type="text" class="form-control my-0 pb-0" id="month1" placeholder="Enter month" readonly="readonly" value="${this.title}">
            </div>
            <div class="mt-1 font-weight-bold">
                當前維修項目:<input type="text" class="form-control my-0 pb-0" id="month1" placeholder="Enter month" readonly="readonly" value="${this.repair_title}">
            </div>
            <div class="mt-1 font-weight-bold">
                維修內容:<textarea type="text" id="materialFormContactMessageEx" class="form-control" style="background-color:#e9ecef" rows="4" readonly="readonly">${this.content}</textarea>
            </div>
            <div class="mt-1 font-weight-bold">
                地點:
                <input type="text" class="form-control my-0 pb-0" placeholder="Enter month " readonly="readonly" value="${this.building}">
                <!--<label>Example label</label> -->
            </div>
            <div class="mt-1 font-weight-bold">
                維修廠商:
                <input type="text" class="form-control my-0 pb-0" placeholder="Enter month " readonly="readonly" value="${this.repairCompany}">
                <!--<label>Example label</label> -->
            </div>
        </div>
            <button type="button " class="btn btn-primary rounded" onclick="(new home_show_home_page('home','show_home_page','body','notice')).run()">確認</button>
        
            <button type="button " class="btn btn-danger rounded ">取消維修</button>
        
    </div>
</div>

<!-- /Start your project here-->

  	`;
        }

        document.getElementById(this.position_id).innerHTML = str;
    }
}
