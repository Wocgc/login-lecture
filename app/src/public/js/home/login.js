"use strict";

// querySelector 직역하면 질의 선택자이고 파라미터에서 받아오는 선택자를 통해서 html의 값을 가져올 수 있음
const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);
//로그인 버튼을 눌렀을 때 id값을 가져오는 함수 선언
//요청하는 데이터니까 req변수에 obj로 담아줌
function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };
  fetch("/login", {
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
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("로그인 중 에러 발생"));
    });
}
