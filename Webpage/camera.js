REPEAT_LINK = "Again?";

$id = function(id) {
	return document.getElementById(id);
};

handleShot = function(str) {
	$id('webcamField').value = str;
	preview = document.createElement("img");
	preview.src="data:image/png;base64," + str;
	preview.width=320;
	preview.height=240;
	$id('webcam_cont').innerHTML ="";// + str;
	$id('webcam_cont').appendChild(preview);
	$id('webcam_cont').innerHTML += "<a href='#' onclick='resetShot(this.parentNode);'>"+REPEAT_LINK+"</a>";
	
};

resetShot = function(container) {
	container.innerHTML = "<object type='application/x-shockwave-flash' data='camera.swf' width='320' height='240'><param name='quality' value='high'/></object>";
	
};

window.onload = function() {

	webcam = $id('webcam');
	cont = document.createElement("div");
	cont.id="webcam_cont";
	resetShot(cont);
	webcam.parentNode.replaceChild(cont,webcam);	
	cont.parentNode.innerHTML += "<input type='hidden' id='webcamField' name='"+webcam.name+"' value=''/>";
};