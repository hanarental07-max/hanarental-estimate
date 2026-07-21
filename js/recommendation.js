function recommendProducts(answer){


let result=[];



products.forEach(product=>{


let score=0;



// 업종 점수

if(product.category.some(
x=>answer.business.includes(x)
)){

score +=30;

}



// 컬러 점수

if(answer.color.includes("컬러")
&& product.color){

score+=20;

}



if(answer.color.includes("흑백")
&& !product.color){

score+=20;

}



// 출력량

if(
answer.volume.includes("10,000")
&& product.volume=="high"
){

score+=30;

}


if(
answer.volume.includes("500")
&& product.volume=="low"
){

score+=20;

}



// A3

if(
answer.size.includes("A3")
&& product.a3
){

score+=20;

}



result.push({

...product,

score

});


});



// 점수순 정렬

result.sort(
(a,b)=>b.score-a.score
);



return result.slice(0,3);


}
