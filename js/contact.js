
// 상담 신청 관리


function goContact(){


questionBox.innerHTML = `


<h2>
무료 상담 신청
</h2>


<p style="color:#666;margin-top:10px">

추천 제품 정보를 담당자에게 전달합니다.

</p>



<div style="margin-top:30px">


<input 
class="input"
id="company"
placeholder="회사명">


<input 
class="input"
id="name"
placeholder="담당자명">


<input 
class="input"
id="phone"
placeholder="휴대폰 번호">


<input 
class="input"
id="region"
placeholder="설치 지역">


<textarea
class="textarea"
id="memo"
placeholder="문의사항">
</textarea>



<label style="
display:flex;
gap:10px;
margin-top:15px;
">


<input 
type="checkbox"
id="privacy">


<span>

개인정보 수집에 동의합니다.

</span>


</label>



<button
class="next-btn"
onclick="submitContact()">

상담 신청 완료

</button>



</div>


`;



}



function submitContact(){


const company =
document.getElementById("company").value;


const name =
document.getElementById("name").value;


const phone =
document.getElementById("phone").value;


const region =
document.getElementById("region").value;


const memo =
document.getElementById("memo").value;


const privacy =
document.getElementById("privacy").checked;



if(!company){

alert("회사명을 입력해주세요.");

return;

}


if(!name){

alert("담당자명을 입력해주세요.");

return;

}



const phoneCheck =
/^01[0-9]-?\d{3,4}-?\d{4}$/;



if(!phoneCheck.test(phone)){


alert("휴대폰 번호를 확인해주세요.");

return;


}



if(!privacy){

alert("개인정보 동의가 필요합니다.");

return;

}



const inquiry={


company,

name,

phone,

region,

memo,


recommend:

userAnswers,


date:
new Date().toISOString()


};



console.log(
"상담 접수 데이터",
inquiry
);



completeContact();



}



function completeContact(){


questionBox.innerHTML=`

<div style="
text-align:center;
padding:50px 10px;
">


<div style="
font-size:70px;
">

🎉

</div>


<h2>

상담 신청 완료

</h2>


<p style="
margin-top:20px;
color:#666;
">

하나렌탈 전문 상담원이<br>
빠르게 연락드리겠습니다.

</p>



<button
class="next-btn"
onclick="
location.href='tel:1600-0000'
">

전화 상담하기

</button>



</div>

`;

}
