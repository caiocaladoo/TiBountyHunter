function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function close() {
        $.addFugitiveWindow.close();
    }
    function save() {
        var fugitive = Alloy.createModel("fugitive", {
            name: $.nameTextField.value,
            captured: 0,
            photo: ""
        });
        fugitive.save();
        Alloy.Collections.Fugitives.fetch();
        close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addFugitive";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addFugitiveWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        titleid: "new_fugitive",
        id: "addFugitiveWindow"
    });
    $.__views.addFugitiveWindow && $.addTopLevelView($.__views.addFugitiveWindow);
    $.__views.closeButton = Ti.UI.createButton({
        font: {
            fontSize: "18dp"
        },
        titleid: "close",
        id: "closeButton"
    });
    close ? $.__views.closeButton.addEventListener("click", close) : __defers["$.__views.closeButton!click!close"] = true;
    $.__views.addFugitiveWindow.rightNavButton = $.__views.closeButton;
    $.__views.nameTextField = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        width: "200dp",
        hintText: L("fugitive_name"),
        top: "20dp",
        id: "nameTextField"
    });
    $.__views.addFugitiveWindow.add($.__views.nameTextField);
    $.__views.saveButton = Ti.UI.createButton({
        font: {
            fontSize: "18dp"
        },
        titleid: "save",
        top: "20dp",
        height: "40dp",
        width: "200dp",
        id: "saveButton"
    });
    $.__views.addFugitiveWindow.add($.__views.saveButton);
    save ? $.__views.saveButton.addEventListener("click", save) : __defers["$.__views.saveButton!click!save"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.closeButton!click!close"] && $.__views.closeButton.addEventListener("click", close);
    __defers["$.__views.saveButton!click!save"] && $.__views.saveButton.addEventListener("click", save);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;