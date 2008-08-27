<?
	if ( !array_key_exists('webcam',$_FILES)) {
		header("Content-Type: image/png");
		echo base64_decode($_POST['webcam']);
	} else {
		echo "File: " . $_FILES['webcam']['name'];
	}
?>