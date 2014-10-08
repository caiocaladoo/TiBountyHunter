var fugitive = arguments[0];

$.fugitiveDetailsWindow.title = fugitive.get('name');

$.fugitiveImageView.image = fugitive.get('photo')?fugitive.get('photo'):'/images/burglar.png';
function deleteFugitive(){
	fugitive.destroy();
	Alloy.Collections.Fugitives.fetch();
	$.fugitiveDetailsWindow.close({animated:true});
}

function captureFugitive(){
	if(Ti.Geolocation.locationServicesEnabled)
	{
		Ti.Geolocation.purpose= L("fugitive_location");		
		Ti.Geolocation.getCurrentPosition(function(e){
			fugitive.set({captured:1, capturedLat:e.coords.latitude, capturedLong:e.coords.longitude});
			fugitive.save();
			close();
		});
		
		
	}
	
	
}

function close(){
	
	Alloy.Collections.Fugitives.fetch();
	$.fugitiveDetailsWindow.close({animated:true});
}

function addPhoto(){
	Ti.Media.showCamera({
		mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO],
		success:function(e){
			var image = e.media;
			$.fugitiveImageView.image = image;
			
			var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, fugitive.get('alloy_id') + '.jpg');
			file.write(image);
			
			fugitive.set({'photo':file.nativePath});
			fugitive.save();
			
			Alloy.Collections.Fugitives.fetch();
		}
	});
}