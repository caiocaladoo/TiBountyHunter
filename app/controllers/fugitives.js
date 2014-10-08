//sem dataBind
/*var fugitives = Alloy.Collections.Fugitives;
fugitives.fetch();
var rows = [];
for(var i; i< fugitives.lengh;i++)
{
	var row = Ti.UI.createTableViewRow({
		title:fugitives.at(i).get('name')
	});
	fugitives[i];
	rows.push(row);
}
$.fugitivesTableView.setData(rows);
*/


function showDetails(e){
	var fugitive = Alloy.Collections.Fugitives.get(e.rowData.objectId);
	var ctrl = Alloy.createController('fugitivesDetails',fugitive);
	$.fugitivesTab.open(ctrl.getView());
	
}

function addFugitive(){
	var ctrl = Alloy.createController('addFugitive');
	ctrl.getView().open({modal:true});
}

function fugitiveFilter (collection) {
  return collection.where({captured:0});
}
