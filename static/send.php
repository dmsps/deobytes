<?php

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$email = isset($data['email'])?$data['email']:false;
$message = isset($data['message'])?$data['message']:false;

if( $email && $message ){
	$text    = "$message <br/>Заявка от $email";
	@file_get_contents("https://api.telegram.org/bot1308071884:AAFUe3gVKO9EuoJf_gWtFmwt9UpuL4E85KE/sendMessage?chat_id=-578957056&text=$text");
	//Отправка сообщения
			echo 'Ok';
	
}
else{
		echo 'Ошибка: обязательные параметры';
}