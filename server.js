const express = require("express");
const app = express();
//경로지정을 조금 더 간단하게 해주는 선언
const path = `${__dirname}/views/boards`

//보더라우터스를 꺼내오는 선언
const boardsRouters = require("./router/board.router.js")

app.use(express.urlencoded({ extended: false }));


app.get("/",(req,res) => {
    res.sendFile(`${path}/index.html`)
})

//라우터를 사용하겠다 근데 엔드포인트는 /boards를 기본으로 앞에 깔아준다 그리고 라우터는 이 모듈을 써라
app.use("/boards", boardsRouters);

app.listen(4000,() => {
    console.log("서버는 힘차게 돌아가고 있다!");
})