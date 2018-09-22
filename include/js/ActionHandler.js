class ActionHandler {
    constructor(module, js_action) {
        this.module = module;
        this.js_action = js_action;
        this.php_action = js_action;
        this.args = null;
        this.php = true;

    }
    // addArgsbyselect(){

    // }
    // addArgsbyid(id) {
    //     var value = $('#' + id).val();
    //     this.addArgs(id, value);
    // }
    addArgsbyid(data) {
        var value = $('#' + data).val();
        this.addArgs(data, value);
    }
    addArgsbyname(name) {
        var value = document.getElementByName(name).value;
        this.addArgs(name, value);
    }
    addArgs(id, value) {
        if (this.args === null) {
            this.args = id + "=" + value;
        }
        else
            this.args += "&" + id + "=" + value;
    }
    run() {
        this.prepareArgs();
        if (!this.php) {
            // this.showResult();
            this.showResult(xhttp);
            return;
        }
        var self = this;
        var xhttp = new XMLHttpRequest();
        var where_statement = null;
        xhttp.onreadystatechange = function() {
            var ResponseText;
            if (this.readyState === 4 && this.status === 200) {
                self.ajax_success(xhttp);
            }
            else {
                self.ajax_error(xhttp);
            }
        };


        xhttp.open("POST", "module_dispatcher.php?module=" + this.module + "&action=" + this.php_action, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(this.args);
        /*
                                if (data != null) {
                                    this.prepareArgs(data);
                                }
                                else {
                                    this.prepareArgs();
                                }

                                if (!this.php) {
                                    this.showResult();
                                    return;
                                }

                                var parent = this;
                                parent.ajax({
                                    type: "POST",
                                    url: "module_dispatcher.php?module=" + this.module + "&action=" + this.php_action,
                                    data: this.args,
                                    success: function(json_str) { parent.ajax_success(json_str); },


                                    error: function(jqXHR) {
                                        parent.ajax_error(jqXHR);
                                    }
                                });
        */
    }
    loadScript(src, id) {
        var script = document.getElementById(id);
        if (script === null) {
            script = document.createElement("script");
            script.src = src;
            script.id = id;
            document.head.appendChild(script);
        }
        //return script;
    }
    loadModuleScript(module, action) {
        var id = module + "_" + action;
        var src = "modules/" + module + "/js_action/" + id + ".js";
        this.loadScript(src, id);
        //return this.loadScript(src, id);
    }

}
