<?php

header('Content-Type: application/json; charset=utf-8');

$data=json_decode(file_get_contents("php://input"),true);

$company=$data['company'];
$name=$data['name'];
$phone=$data['phone'];
$region=$data['region'];
$memo=$data['memo'];
$recommend=$data['recommend'];

$to="YOUR_EMAIL@naver.com";

$subject="[하나렌탈] 새로운 AI 견적 신청";

$message="";

$message.="회사명 : ".$company."\n";
$message.="담당자 : ".$name."\n";
$message.="연락처 : ".$phone."\n";
$message.="설치지역 : ".$region."\n\n";

$message.="추천모델\n";
$message.=print_r($recommend,true);

$message.="\n";

$message.="문의내용\n";
$message.=$memo;

$headers="From: noreply@hanarental.co.kr";

$result=mail($to,$subject,$message,$headers);

echo json_encode([
    "success"=>$result
]);

?>
