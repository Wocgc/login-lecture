"use strict";

//app이 아닌 router로 선언하고 app을 router로 치환
const express = require("express");
const router = express.Router();

//ctrl안에 있는 hello와 login 불러와 연결함
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router;

//index.js를 app.js로 연결
//라우터를 외부파일에서 사용 가능하게 연결해줌, 내보냄
