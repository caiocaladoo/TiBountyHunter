function close(){
	$.addFugitiveWindow.close();
	
}

function save(){
	var fugitive = Alloy.createModel('fugitive', {
		name:$.nameTextField.value,
		captured:0,
		photo:''
		
	});
	
	fugitive.save();
	
	Alloy.Collections.Fugitives.fetch();
	close();
	
}
