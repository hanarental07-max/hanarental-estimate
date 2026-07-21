fetch("sendMail.php", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(inquiry)

})

.then(response => {

    if(!response.ok){

        throw new Error("HTTP 오류");

    }

    return response.json();

})

.then(data => {

    if(data.success){

        completeContact();

    }else{

        alert(data.message || "메일 발송 실패");

    }

})

.catch(error => {

    console.error(error);

    alert("서버와 통신하지 못했습니다.");

});
