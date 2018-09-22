class home_show_home_page_E extends ActionHandler {
    constructor(module, action, position_id, blank) {
        super(module, action);
        this.position_id = position_id;
        this.blank = blank;

    }
    prepareArgs() {
        this.php = true;
    }
    ajax_success(xhttp) {
        try {
            var json_str = xhttp.responseText;
            var obj = JSON.parse(json_str);

            if (obj['status_code'] === 1) {
                (new case_show_select_page_E('case', 'show_select_page', 'home')).run();
                var str = `
                
    <!-- Start your project here-->
    <header>
        <!-- Sidebar navigation -->
        <div id="slide-out" class="side-nav sn-bg-4 fixed ">
            <ul class="custom-scrollbar">
                <!-- Logo -->
                <li>
                    <div class="logo-wrapper waves-light">
                        <a href="#"><img src="http://www.huayulien.com/wp-content/uploads/2015/04/H-logo-e1429491876768.png" class="img-fluid flex-center"></a>
                    </div>
                </li>
                <!--/. Logo -->
                <!--Social-->
                <li>
                    <ul class="social">
                        <li><a href="#" class="icons-sm fb-ic"><i class="fa fa-facebook"> </i></a></li>
                        <li><a href="#" class="icons-sm pin-ic"><i class="fa fa-pinterest"> </i></a></li>
                        <li><a href="#" class="icons-sm gplus-ic"><i class="fa fa-google-plus"> </i></a></li>
                        <li><a href="#" class="icons-sm tw-ic"><i class="fa fa-twitter"> </i></a></li>
                    </ul>
                </li>
                <!--/Social-->
                <!--Search Form-->
                <li>
                    <form class="search-form" role="search">
                        <div class="form-group md-form mt-0 pt-1 waves-light">
                            <input type="text" class="form-control" placeholder="Search">
                        </div>
                    </form>
                </li>
                <!--/.Search Form-->
                <!-- Side navigation links -->
                <li>
                    <ul class="collapsible collapsible-accordion">
                        <li><a class="collapsible-header waves-effect arrow-r"><i class="fa fa-chevron-right"></i> 首頁<i class="fa fa-angle-down rotate-icon"></i></a>
                            <div class="collapsible-body">
                                <ul class="list-unstyled">
                                    <li><a href="submit.html" class="waves-effect"><i class="fa fa-hand-pointer-o"></i>我要報修</a>
                                    </li>
                                    <li><a href="#" class="waves-effect"><i class="fa fa-eye"></i>維修狀態追蹤</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li><a class="collapsible-header waves-effect arrow-r"><i class="fa fa-envelope-o"></i> 客服中心<i class="fa fa-angle-down rotate-icon"></i></a>
                            <div class="collapsible-body">
                                <ul class="list-unstyled">
                                    <li><a href="#" class="waves-effect">FAQ</a>
                                    </li>
                                    <li><a href="#" class="waves-effect">Write a message</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                <!--/. Side navigation links -->
            </ul>
            <div class="sidenav-bg mask-strong"></div>
        </div>
        <!--/. Sidebar navigation -->
        <!-- Navbar -->
        <nav class="navbar fixed-top navbar-toggleable-md navbar-expand-lg double-nav">
            <!-- SideNav slide-out button -->
            <div class="float-left">
                <a href="#" data-activates="slide-out" class="button-collapse"><i class="fa fa-bars"></i></a>
            </div>
            <!-- Breadcrumb-->
            <ul class="nav navbar-nav nav-flex-icons ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-gear fa-lg p-0" aria-hidden="true"></i> 設定
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="login.html">登出</a>
                    </div>
                </li>
            </ul>
        </nav>
        <!-- /.Navbar -->
    </header>
    
    <!-- /.搜尋 -->
    <div class="tab-content px-1">
        <div class="tab-pane fade " id="search" role="tabpanel">
            <div class="container mt-4">
                <div class="fontsm">
                    <h4>搜尋</h4>
                    <div class="row">
                        <div class="form-check col-4">
                            <input name="group2" type="radio" class="form-check-input with-gap" id="radioWithGap4" checked="checked">
                            <label class="form-check-label " for="radioWithGap4"><h4>案件</h4></label>
                        </div>

                        <div class="form-check col-4">
                            <input name="group2" type="radio" class="form-check-input with-gap" id="radioWithGap5">
                            <label class="form-check-label" for="radioWithGap5"><h4>住戶</h4></label>
                        </div>
                        <div class="form-check col-4">
                            <input name="group2" type="radio" class="form-check-input with-gap" id="radioWithGap6">
                            <label class="form-check-label" for="radioWithGap6"><h4>維修廠商</h4></label>
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
                            <input type="date" id="new" class="form-control w-100" style="font-size:30px">
                        </div>
                        <div class="col-6">
                            聯絡人
                            <input class="form-control " type="text ">
                        </div>
                    </div>
                    <button type="button" class="btn btn-indigo"><h4>搜尋</h4></button>
                    <!-- /.<a href="E_set.html"><button type="button" class="btn btn-indigo"><h4>我的建案</h4></button></a>-->

                    <div class="col-12" id="min-h">

                        <table class="table  text-center">
                            <tr>
                                <th scope="col" class="px-2 fontsm">建案名稱</th>
                                <th scope="col" class="pl-2 fontsm">維修類型</th>
                                <th scope="col" class="pl-2 fontsm">完成日期</th>
                                <th scope="col" class="px-0 fontsm">詳細狀況</th>
                            </tr>
                            </thead>
                        </table>
                        <div class="overFlow">
                            <table class="table  text-center table-striped">
                                <tbody>
                                    <tr>
                                        <th class="pt-4 pl-3 fontsm">JIA</th>
                                        <td class="pt-4 fontsm">電機類</td>
                                        <td class="pt-4 fontsm">2018/02/03</td>
                                        <td>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <a type="button" class="btn bg-transparent p-2" href="casefinal.html">
                                                    <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="pt-4 pl-3 fontsm">JIA</th>
                                        <td class="pt-4 fontsm">水電類</td>
                                        <td class="pt-4 fontsm">2018/02/02</td>
                                        <td>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <a type="button" class="btn bg-transparent p-2" href="casefinal.html">
                                                     <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="pt-4 pl-3 fontsm">JIA</th>
                                        <td class="pt-4 fontsm">水電類</td>
                                        <td class="pt-4 fontsm">2018/02/01</td>
                                        <td>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <a type="button" class="btn bg-transparent p-2" href="casefinal.html">
                                                    <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="pt-4 pl-3 fontsm">JIA</th>
                                        <td class="pt-4 fontsm">電機類</td>
                                        <td class="pt-4 fontsm">2018/01/23</td>
                                        <td>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <a type="button" class="btn bg-transparent p-2" href="casefinal.html">
                                                     <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="pt-4 pl-3 fontsm">JIA</th>
                                        <td class="pt-4 fontsm">清潔服務</td>
                                        <td class="pt-4 fontsm">2018/01/01</td>
                                        <td>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <a type="button" class="btn bg-transparent p-2" href="casefinal.html">
                                                    <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="pt-4 pl-3 fontsm">JIA</th>
                                        <td class="pt-4 fontsm">水電類</td>
                                        <td class="pt-4 fontsm">2017/12/23</td>
                                        <td>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <a type="button" class="btn bg-transparent p-2" href="casefinal.html">
                                                     <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="pt-4 pl-3 fontsm">JIA</th>
                                        <td class="pt-4 fontsm">安裝工程</td>
                                        <td class="pt-4 fontsm">2017/12/12</td>
                                        <td>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <a type="button" class="btn bg-transparent p-2" href="casefinal.html">
                                                    <i class="fa fa-file fa-lg text-dark"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- /.通知 -->
        <div class="tab-pane fade" id="notice" role="tabpanel">
            <div class="list-group font-weight-bold h2 pt-3">

                <a href="case.html" class="list-group-item list-group-item-success">豐花園 水電類 3-9 水管破裂 2018/03/01</a>
                <a href="case.html" class="list-group-item list-group-item-warning">七期 電機類 5-3 冷氣無法正常開啟 2018/02/21</a>

                <a href="case.html" class="list-group-item list-group-item-success">水岸 水電類 3-6 水管破裂 2018/01/10</a>
                <a href="case.html" class="list-group-item list-group-item-success">水岸 水電類 2-9 水管破裂 2017/12/22</a>
                <a href="case.html" class="list-group-item list-group-item-warning">豐花園 電機類 3-9 電梯無法正常使用 2017/11/31</a>
                <a href="case.html" class="list-group-item list-group-item-success">豐花園 水電類 3-2 水管破裂 2017/10/12</a>
                <a href="case.html" class="list-group-item list-group-item-warning">七期 電機類 5-9 地下室鐵捲門異音 2017/10/12</a>
                <a href="case.html" class="list-group-item list-group-item-success">豐花園 水電類 7-4 水管破裂 2017/09/01</a>
            </div>
        </div>

        <!-- /首頁. -->
        <div class="tab-pane fade in show active" id="home" role="tabpanel">
            
        </div>

    
    </div>



    <footer class="page-footer fixed-bottom font-small pt-0">
        <div class="container-fluid pl-0 pr-0">
            <div class="tabs-wrapper ">
                <ul class="nav classic-tabs tabs-dark" role="tablist">
                    <li class="nav-item maxWith" onclick="(new case_show_select_page('case', 'show_select_page', 'home')).run();">
                        <a href="#home" id="homeb" class="nav-link waves-light active" data-toggle="tab" role="tab"><i class="fa fa-home  white-text fa-2x" aria-hidden="true"> </i>
                        </br>首頁</a>
                    </li>
                    <li class="nav-item maxWith" onclick="(new news_do_select_action('news', 'do_select_action', 'news')).run();">
                        <a href="#search" id="searchb" class="nav-link waves-light" data-toggle="tab" role="tab"><i class="fa fa-search  white-text fa-2x" aria-hidden="true"> </i>
                        </br>搜尋</a>
                    </li>
                    <li class="nav-item maxWith" onclick="(new news_do_select_action('news', 'do_select_action', 'news')).run();">
                        <a href="#notice" id="noticeb" class="nav-link waves-light" data-toggle="tab" role="tab"><i class="fa fa-bell white-text fa-2x" aria-hidden="true"></i>
                        <span class="counter">2</span>
                        </br>通知</a>
                    </li>
                </ul>
            </div>
        </div>



        <!--Footer Links-->


    </footer>


    <!-- /Start your project here-->


    <!-- SCRIPTS -->
    <!-- JQuery -->
    <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="js/popper.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="js/mdb.min.js"></script>
    <script>
        // SideNav Button Initialization
        $(".button-collapse").sideNav();
        // SideNav Scrollbar Initialization
        var sideNavScrollbar = document.querySelector('.custom-scrollbar');
        Ps.initialize(sideNavScrollbar);
        // SideNav Options>

        $(function() {
            $('#myTab a:last').tab('show')
        })
        $(document).ready(function() {
            $('.mdb-select').material_select();
        });
    </script>

`;

                document.getElementById(this.position_id).innerHTML = str;




                switch (this.blank) {
                    case 'home':
                        {
                            $('#homeb').click();
                            break;
                        }
                    case 'search':
                        {
                            $('#searchb').click();
                            break;
                        }
                    case 'notice':
                        {
                            $('#noticeb').click();
                            break;
                        }
                    default:
                        {
                            $('#homeb').click();
                            break;
                        }

                }



            }
            else if (obj['status_code'] == 2) {
                (new login_show_login_page("login", "show_login_page", "body")).run();
                var script = this.loadModuleScript("login", "show_login_page");
            }
            else {
                console.log("Invalid status code " + obj['status_code']);
            }
        }
        catch (e) {
            var msg = e + "<br>";
            msg += "JSON String: " + json_str;
            document.getElementById(this.position_id).innerHTML = msg;
        }
    }
    ajax_error(msg) {


    }


}
