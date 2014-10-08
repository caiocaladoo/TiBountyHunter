exports.definition = {
	config: {
		columns: {
		    
		    "name": "text",
		    "photo": "text",
		    "captured": "integer",
		    "capturedLat": "real",
		    "capturedLong": "real"
		},
		adapter: {
			type: "sql",
			collection_name: "fugitives"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};