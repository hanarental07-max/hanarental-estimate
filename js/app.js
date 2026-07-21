const startBtn =
document.getElementById("startBtn");


const hero =
document.getElementById("hero");


const questionBox =
document.getElementById("questionBox");


const nextBtn =
document.getElementById("nextBtn");



startBtn.onclick=function(){


hero.style.display="none";

questionBox.style.display="block";


renderQuestion();


};



function renderQuestion(){


const q=getQuestion();



document.getElementById(
"questionTitle"
).innerHTML=q.title;



document.getElementById(
"progressBar"
).style.width=
getProgress()+"%";



let html="";


q.options.forEach(option=>{


html+=`

<div class="option"
onclick="selectOption(this,'${option}')">

${option}

</div>

`;

});



document.getElementById(
"options"
).innerHTML=html;


}




let selectedOption="";



function selectOption(el,value){


document.querySelectorAll(
".option"
)
.forEach(x=>
x.classList.remove("active")
);



el.classList.add("active");


selectedOption=value;


}



nextBtn.onclick=function(){


if(!selectedOption){

alert("항목을 선택해주세요.");

return;

}



saveAnswer(selectedOption);



selectedOption="";



if(nextQuestion()){


renderQuestion();


}else{


showResult();


}


};





function showResult(){


questionBox.innerHTML=`

<h2>

AI 분석 완료

</h2>


<div class="option active">

복합기 추천 준비 완료

<br><br>

출력환경을 분석했습니다.

</div>


<button class="next-btn">

추천 결과 보기

</button>

`;



console.log(userAnswers);


}
