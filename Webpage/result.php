<?

	$target_path = "uploads/";

	if ( !array_key_exists('webcam',$_FILES)) {
		$target_path = $target_path . "webcam_shot_at" .time() . ".png";
		$f = fopen( $target_path, "wb" ); 
		fwrite($f,base64_decode($_POST['webcam'])); 
		fclose($f);
	} else {
		$target_path = $target_path .$_FILES['webcam']['name']; 
		move_uploaded_file($_FILES['webcam']['tmp_name'], $target_path);
	}
	
	echo "<img src='".$target_path."' alt='' />";
	
?>