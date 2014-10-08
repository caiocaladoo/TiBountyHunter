function addFugitive(){
	var ctrl = Alloy.createController('addFugitive');
	ctrl.getView().open({modal:true});
}

Alloy.Collections.Fugitives.fetch();
$.index.open();
