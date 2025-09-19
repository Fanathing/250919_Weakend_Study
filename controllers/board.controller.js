const boards = require("../db/boards.data.js");
const path = require("path");


const getList = (req, res) => {
    res.render("boards/list.html", {
        boards
    })
}

const getCreate = (req, res) => {
    res.sendFile(path.join(__dirname,`../views/boards/create.html`))
}

const postCreate = (req, res) => {
    const { userId, title, content } = req.body;
    // 생성일을 선언
    const now = new Date();
    const date = `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}`
    // 유니크 키를 선언
    const key =  Date.now();

    boards.push({
        id: boards.length +1,
        key: key,
        userId,
        title,
        content,
        created_at: date,
        updated_at: date
    })

    res.redirect("/boards");
    console.log(boards);
    
}

module.exports = {
    getList,
    getCreate,
    postCreate
}