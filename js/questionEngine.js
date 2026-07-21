// 하나렌탈 AI 견적 질문 데이터


const questions = [

{
id:"business",
title:"어떤 업종에서 사용하시나요?",
options:[
"🏢 일반 사무실",
"🏫 학원·교육기관",
"🏥 병원·의료기관",
"🏗 건설·설계",
"🏪 매장·소매업",
"📑 세무·회계"
]
},


{
id:"color",
title:"컬러 출력이 필요하신가요?",
options:[
"🎨 컬러 출력 필요",
"⚫ 흑백 출력 위주",
"🤔 잘 모르겠음"
]
},


{
id:"volume",
title:"월 출력량은 어느 정도인가요?",
options:[
"500장 이하",
"500~3,000장",
"3,000~10,000장",
"10,000장 이상"
]
},


{
id:"size",
title:"필요한 출력 크기는?",
options:[
"A4만 필요",
"A3 출력 필요",
"잘 모르겠음"
]
},


{
id:"function",
title:"필요한 기능을 선택하세요.",
multiple:true,
options:[
"스캔",
"복사",
"팩스",
"양면출력",
"OCR",
"모바일 출력"
]
},


{
id:"budget",
title:"희망 월 렌탈 비용은?",
options:[
"3만원 이하",
"3~5만원",
"5~10만원",
"10만원 이상"
]
},


{
id:"region",
title:"설치 지역은 어디인가요?",
options:[
"익산",
"전주",
"군산",
"김제",
"완주",
"기타"
]
}

];



let userAnswers={};


let currentQuestion=0;



function getQuestion(){

return questions[currentQuestion];

}



function saveAnswer(value){


const q=getQuestion();


userAnswers[q.id]=value;


}



function nextQuestion(){


if(currentQuestion < questions.length-1){

currentQuestion++;

return true;

}


return false;

}



function prevQuestion(){


if(currentQuestion>0){

currentQuestion--;

return true;

}


return false;

}



function getProgress(){


return Math.round(
((currentQuestion+1)
/questions.length)*100
);


}
