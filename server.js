const express = require("express");
const app = express();

app.get("/",(req,res) => {
    console.log(req);
})

app.listen(4000,() => {
    console.log("서버는 힘차게 돌아가고 있다!");
})