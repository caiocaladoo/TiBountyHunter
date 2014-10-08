function Controller() {
    function __alloyId13() {
        __alloyId13.opts || {};
        var models = fugitiveFilter(__alloyId12);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId10 = models[i];
            __alloyId10.__transform = {};
            var __alloyId11 = Ti.UI.createTableViewRow({
                color: "#000",
                font: {
                    fontSize: "18dp"
                },
                title: "undefined" != typeof __alloyId10.__transform["name"] ? __alloyId10.__transform["name"] : __alloyId10.get("name"),
                objectId: "undefined" != typeof __alloyId10.__transform["alloy_id"] ? __alloyId10.__transform["alloy_id"] : __alloyId10.get("alloy_id")
            });
            rows.push(__alloyId11);
        }
        $.__views.__alloyId8.setData(rows);
    }
    function showDetails(e) {
        var fugitive = Alloy.Collections.Fugitives.get(e.rowData.objectId);
        var ctrl = Alloy.createController("fugitivesDetails", fugitive);
        $.fugitivesTab.open(ctrl.getView());
    }
    function addFugitive() {
        var ctrl = Alloy.createController("addFugitive");
        ctrl.getView().open({
            modal: true
        });
    }
    function fugitiveFilter(collection) {
        return collection.where({
            captured: 0
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "fugitives";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.fugitivesWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        titleid: "fugitives",
        id: "fugitivesWindow"
    });
    $.__views.addNewFugitiveButton = Ti.UI.createButton({
        font: {
            fontSize: "18dp"
        },
        systemButton: Ti.UI.iPhone.SystemButton.ADD,
        id: "addNewFugitiveButton"
    });
    addFugitive ? $.__views.addNewFugitiveButton.addEventListener("click", addFugitive) : __defers["$.__views.addNewFugitiveButton!click!addFugitive"] = true;
    $.__views.fugitivesWindow.rightNavButton = $.__views.addNewFugitiveButton;
    $.__views.__alloyId8 = Ti.UI.createTableView({
        id: "__alloyId8"
    });
    $.__views.fugitivesWindow.add($.__views.__alloyId8);
    var __alloyId12 = Alloy.Collections["Fugitives"] || Fugitives;
    __alloyId12.on("fetch destroy change add remove reset", __alloyId13);
    showDetails ? $.__views.__alloyId8.addEventListener("click", showDetails) : __defers["$.__views.__alloyId8!click!showDetails"] = true;
    $.__views.fugitivesTab = Ti.UI.createTab({
        icon: "/images/fugitives.png",
        titleid: "fugitives",
        window: $.__views.fugitivesWindow,
        id: "fugitivesTab"
    });
    $.__views.fugitivesTab && $.addTopLevelView($.__views.fugitivesTab);
    exports.destroy = function() {
        __alloyId12.off("fetch destroy change add remove reset", __alloyId13);
    };
    _.extend($, $.__views);
    __defers["$.__views.addNewFugitiveButton!click!addFugitive"] && $.__views.addNewFugitiveButton.addEventListener("click", addFugitive);
    __defers["$.__views.__alloyId8!click!showDetails"] && $.__views.__alloyId8.addEventListener("click", showDetails);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;