const express = require("express");
const app = express();
const path = `${__dirname}/views/boards`

app.get("/",(req,res) => {
    res.sendFile(`${path}/index.html`)
})

app.listen(4000,() => {
    console.log("서버는 힘차게 돌아가고 있다!");
})