"use strict";

//express 라는 프레임워크 사용
const express = require("express");
const app = express();
const PORT = 3000;

const home = require("./routes/home");

//app 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home);
//home을 저장하고 만들어진 index.js 파일의 경로를 명시해줌

module.exports = app;

//git bash에서 node 실행 후 app.js 파일을 js로 옮겨줌
// -s는 --save랑 똑같음
//npm app.js로 서버 가동 후 localhost:포트번호로 서버 창 확인
