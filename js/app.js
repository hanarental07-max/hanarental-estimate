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


function showResult(){


const result =
recommendProducts(userAnswers);



questionBox.innerHTML=`

<h2>
AI 추천 완료 🎉
</h2>


${result.map(product=>`

<div class="option">

<h3>
${product.brand}
${product.model}
</h3>


<p>

추천 점수 :
<strong>
${product.score}점
</strong>

</p>


<p>

월 렌탈료 :
<strong>
${product.price.toLocaleString()}원~

</strong>

</p>


<ul>

${product.features
.map(f=>`<li>${f}</li>`)
.join("")}

</ul>


</div>


`).join("")}

<button class="next-btn"
onclick="goContact()">

상담 신청하기

</button>

`;

}


}


};





function showResult(){


const result =
recommendProducts(userAnswers);



questionBox.innerHTML=`

<h2>
AI 분석 결과 🎉
</h2>


<p style="color:#666;margin-top:10px">

입력하신 환경을 기준으로<br>
가장 적합한 복합기를 추천했습니다.

</p>


<div class="result-wrapper">


${result.map((product,index)=>`


<div class="product-card 
${index===0?'best':''}">


${index===0?`

<div class="best-badge">

AI BEST 추천

</div>

`:''}



<img 
class="product-image"
src="${product.image}"
onerror="
this.src='assets/images/no-image.png'
">


<div class="product-brand">

${product.brand}

</div>


<div class="product-name">

${product.model}

</div>



<div class="score-box">


추천 적합도


<div class="score-number">

${product.score}점

</div>


</div>



<div class="price">

월 ${product.price.toLocaleString()}원~

</div>



<ul class="feature-list">


${product.features
.map(f=>`

<li>${f}</li>

`)
.join("")}


</ul>



</div>


`).join("")}


</div>


<button 
class="next-btn"
onclick="goContact()">

이 제품으로 상담 신청

</button>


`;

}


console.log(userAnswers);


}
