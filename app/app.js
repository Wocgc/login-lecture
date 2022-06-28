"use strict";

//express 라는 프레임워크 사용

//module
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//라우팅
const home = require("./src/routes/home");

//app 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//url을 통해서 전달되는 데이터에 한글, 공백 등과 같은, 문자들이 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extends: true }));

app.use("/", home);
//home을 저장하고 만들어진 index.js 파일의 경로를 명시해줌

module.exports = app;

//git bash에서 node 실행 후 app.js 파일을 js로 옮겨줌
// -s는 --save랑 똑같음
//npm app.js로 서버 가동 후 localhost:포트번호로 서버 창 확인
