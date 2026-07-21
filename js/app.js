
const startBtn =
document.getElementById("startBtn");


const hero =
document.getElementById("hero");


const questionBox =
document.getElementById("questionBox");



startBtn.onclick=function(){


hero.style.display="none";


questionBox.style.display="block";


loadQuestion();


};



const questions=[

{

title:"어떤 업종인가요?",

options:[

"🏢 사무실",

"🏫 학원",

"🏥 병원",

"🏗 건설",

"🏪 매장"

]

}

];



let current=0;



function loadQuestion(){


const q=questions[current];


document.getElementById(
"questionTitle"
).innerHTML=q.title;



let html="";


q.options.forEach(item=>{


html+=`

<div class="option">

${item}

</div>

`;


});


document.getElementById(
"options"
).innerHTML=html;



}


