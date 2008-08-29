var webcam = null;

$id = function(id) {
	return document.getElementById(id);
};

handleShot = function(str) {
	$id('webcaminput_field').value = str;
};

switch_to_webcam = function(id) {
	webcam = $id(id);
	cont = document.createElement("div");
	cont.innerHTML = "<object type='application/x-shockwave-flash' data='camera.swf' width='320' height='240'><param name='quality' value='high'/></object>";
	webcam.parentNode.replaceChild(cont,webcam);	
	cont.innerHTML += "<input type='hidden' id='webcaminput_field' name='"+webcam.name+"' value=''/>";
};

reset_to_file = function() {
	cont = $id('webcaminput_field').parentNode;
	cont.innerHTML = "";
	cont.appendChild(webcam);
	
};

toggle_webcam = function(id) {
	if ( $id('webcaminput_field') != null) {
		reset_to_file();
	} else {
		switch_to_webcam(id);
	}
};