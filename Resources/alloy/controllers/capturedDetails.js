function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "capturedDetails";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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