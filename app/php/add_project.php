<?php 

$name = $_POST['name'];

$data = array();



if ($name == ''){
	$data["status"] = "Error";
	$data['text'] = 'Заполните имя!';
}else{
	$data["status"] = "OK";
	$data['text'] = 'Вы молодец, не забыли запомнить имя';
}


header("Content-type: application/json");
echo json_encode($data);

exit;

?>