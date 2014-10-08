function Controller() {
    function __alloyId6() {
        __alloyId6.opts || {};
        var models = capturedFilter(__alloyId5);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId3 = models[i];
            __alloyId3.__transform = {};
            var __alloyId4 = Ti.UI.createTableViewRow({
                color: "#000",
                font: {
                    fontSize: "18dp"
                },
                title: "undefined" != typeof __alloyId3.__transform["name"] ? __alloyId3.__transform["name"] : __alloyId3.get("name"),
                objectId: "undefined" != typeof __alloyId3.__transform["alloy_id"] ? __alloyId3.__transform["alloy_id"] : __alloyId3.get("alloy_id")
            });
            rows.push(__alloyId4);
        }
        $.__views.__alloyId1.setData(rows);
    }
    function showDetails(e) {
        var fugitive = Alloy.Collections.Fugitives.get(e.rowData.objectId);
        var ctrl = Alloy.createController("capturedDetails", fugitive);
        $.capturedTab.open(ctrl.getView());
    }
    function capturedFilter(collection) {
        return collection.where({
            captured: 1
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "captured";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.capturedWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        titleid: "captured",
        id: "capturedWindow"
    });
    $.__views.__alloyId1 = Ti.UI.createTableView({
        id: "__alloyId1"
    });
    $.__views.capturedWindow.add($.__views.__alloyId1);
    var __alloyId5 = Alloy.Collections["Fugitives"] || Fugitives;
    __alloyId5.on("fetch destroy change add remove reset", __alloyId6);
    showDetails ? $.__views.__alloyId1.addEventListener("click", showDetails) : __defers["$.__views.__alloyId1!click!showDetails"] = true;
    $.__views.capturedTab = Ti.UI.createTab({
        icon: "/images/captured.png",
        titleid: "captured",
        window: $.__views.capturedWindow,
        id: "capturedTab"
    });
    $.__views.capturedTab && $.addTopLevelView($.__views.capturedTab);
    exports.destroy = function() {
        __alloyId5.off("fetch destroy change add remove reset", __alloyId6);
    };
    _.extend($, $.__views);
    __defers["$.__views.__alloyId1!click!showDetails"] && $.__views.__alloyId1.addEventListener("click", showDetails);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;