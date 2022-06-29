"use strict";

// querySelector 직역하면 질의 선택자이고 파라미터에서 받아오는 선택자를 통해서 html의 값을 가져올 수 있음
const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);
//로그인 버튼을 눌렀을 때 id값을 가져오는 함수 선언
//요청하는 데이터니까 req변수에 obj로 담아줌
function register() {
  if (!id.value) return alert("아이디를 입력해주십시오.");
  if (psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");

  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
  };

  fetch("/register", {
    //fetch를 이용해서 서버가 클라이언트에게 전달하는 과정
    method: "POST",
    headers: {
      "Content-Type": "application/Json",
    },
    body: JSON.stringify(req), //JSON을 이용해서 데이터를 전달해야함
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입 중 에러 발생"));
    });
}
