var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            name: "text",
            photo: "text",
            captured: "integer",
            capturedLat: "real",
            capturedLong: "real"
        },
        adapter: {
            type: "sql",
            collection_name: "fugitives"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("fugitive", exports.definition, []);

collection = Alloy.C("fugitive", exports.definition, model);

exports.Model = model;

exports.Collection = collection;