"use strict";

//서버를 띄워주는 코드 작성
const app = require("../app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("서버 가동");
});
