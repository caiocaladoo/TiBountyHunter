function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function deleteFugitive() {
        fugitive.destroy();
        Alloy.Collections.Fugitives.fetch();
        $.fugitiveDetailsWindow.close({
            animated: true
        });
    }
    function captureFugitive() {
        if (Ti.Geolocation.locationServicesEnabled) {
            Ti.Geolocation.purpose = L("fugitive_location");
            Ti.Geolocation.getCurrentPosition(function(e) {
                fugitive.set({
                    captured: 1,
                    capturedLat: e.coords.latitude,
                    capturedLong: e.coords.longitude
                });
                fugitive.save();
                close();
            });
        }
    }
    function close() {
        Alloy.Collections.Fugitives.fetch();
        $.fugitiveDetailsWindow.close({
            animated: true
        });
    }
    function addPhoto() {
        Ti.Media.showCamera({
            mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ],
            success: function(e) {
                var image = e.media;
                $.fugitiveImageView.image = image;
                var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, fugitive.get("alloy_id") + ".jpg");
                file.write(image);
                fugitive.set({
                    photo: file.nativePath
                });
                fugitive.save();
                Alloy.Collections.Fugitives.fetch();
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "fugitivesDetails";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.fugitiveDetailsWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        id: "fugitiveDetailsWindow"
    });
    $.__views.fugitiveDetailsWindow && $.addTopLevelView($.__views.fugitiveDetailsWindow);
    $.__views.fugitiveLabel = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: 18
        },
        textid: "still_at_large",
        top: "10dp",
        id: "fugitiveLabel"
    });
    $.__views.fugitiveDetailsWindow.add($.__views.fugitiveLabel);
    $.__views.fugitiveImageView = Ti.UI.createImageView({
        top: "10dp",
        width: "150dp",
        height: "120dp",
        id: "fugitiveImageView"
    });
    $.__views.fugitiveDetailsWindow.add($.__views.fugitiveImageView);
    $.__views.addPhotoButton = Ti.UI.createButton({
        font: {
            fontSize: "18dp"
        },
        top: "10dp",
        width: "200dp",
        titleid: "add_Photo",
        id: "addPhotoButton"
    });
    $.__views.fugitiveDetailsWindow.add($.__views.addPhotoButton);
    addPhoto ? $.__views.addPhotoButton.addEventListener("click", addPhoto) : __defers["$.__views.addPhotoButton!click!addPhoto"] = true;
    $.__views.captureButton = Ti.UI.createButton({
        font: {
            fontSize: "18dp"
        },
        top: "10dp",
        width: "200dp",
        titleid: "capture",
        id: "captureButton"
    });
    $.__views.fugitiveDetailsWindow.add($.__views.captureButton);
    captureFugitive ? $.__views.captureButton.addEventListener("click", captureFugitive) : __defers["$.__views.captureButton!click!captureFugitive"] = true;
    $.__views.deleteButton = Ti.UI.createButton({
        font: {
            fontSize: "18dp"
        },
        top: "10dp",
        width: "200dp",
        titleid: "delete",
        id: "deleteButton"
    });
    $.__views.fugitiveDetailsWindow.add($.__views.deleteButton);
    deleteFugitive ? $.__views.deleteButton.addEventListener("click", deleteFugitive) : __defers["$.__views.deleteButton!click!deleteFugitive"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var fugitive = arguments[0];
    $.fugitiveDetailsWindow.title = fugitive.get("name");
    $.fugitiveImageView.image = fugitive.get("photo") ? fugitive.get("photo") : "/images/burglar.png";
    __defers["$.__views.addPhotoButton!click!addPhoto"] && $.__views.addPhotoButton.addEventListener("click", addPhoto);
    __defers["$.__views.captureButton!click!captureFugitive"] && $.__views.captureButton.addEventListener("click", captureFugitive);
    __defers["$.__views.deleteButton!click!deleteFugitive"] && $.__views.deleteButton.addEventListener("click", deleteFugitive);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;