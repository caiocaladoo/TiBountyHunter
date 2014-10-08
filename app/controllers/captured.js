function showDetails(e){
	var fugitive = Alloy.Collections.Fugitives.get(e.rowData.objectId);
	var ctrl = Alloy.createController('capturedDetails',fugitive);
	$.capturedTab.open(ctrl.getView());
	
}
function capturedFilter (collection) {
  return collection.where({captured:1});
}
