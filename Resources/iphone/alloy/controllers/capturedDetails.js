function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "capturedDetails";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.capturedDetailsWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        id: "capturedDetailsWindow"
    });
    $.__views.capturedDetailsWindow && $.addTopLevelView($.__views.capturedDetailsWindow);
    $.__views.capturedLabel = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: 18
        },
        textid: "busted",
        top: "10dp",
        id: "capturedLabel"
    });
    $.__views.capturedDetailsWindow.add($.__views.capturedLabel);
    $.__views.deleteButton = Ti.UI.createButton({
        font: {
            fontSize: "18dp"
        },
        top: "10dp",
        width: "200dp",
        titleid: "delete",
        id: "deleteButton"
    });
    $.__views.capturedDetailsWindow.add($.__views.deleteButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var fugitive = arguments[0];
    $.capturedDetailsWindow.title = fugitive.get("name");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;