var fugitive = arguments[0];

$.capturedDetailsWindow.title = fugitive.get('name');

function deleteFugitive(){
	fugitive.destroy();
	Alloy.Collections.Fugitives.fetch();
	$.fugitiveDetailsWindow.close({animated:true});
}