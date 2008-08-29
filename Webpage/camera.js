$id = function(id) {
	return document.getElementById(id);
};

handleShot = function(str) {
	$id('webcamField').value = str;
};


switch_to_webcam = function(id) {
	webcam = $id(id);
	cont = document.createElement("div");
	cont.id="webcam_cont";
	cont.innerHTML = "<object type='application/x-shockwave-flash' data='camera.swf' width='320' height='240'><param name='quality' value='high'/></object>";
	webcam.parentNode.replaceChild(cont,webcam);	
	cont.parentNode.innerHTML += "<input type='hidden' id='webcamField' name='"+webcam.name+"' value=''/>";
};