const boards = require("../db/boards.data.js");
const path = require("path");

// 생성일을 선언
const now = new Date();
const date = `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}`
// 유니크 키를 선언


// get 요청으로 게시글 목록을 응답하는 역할
const getList = (req, res) => {
    res.render("boards/list.html", {
        boards
    })
}

// get 요청으로 게시글 생성 페이지를 응답하는 역할
const getCreate = (req, res) => {
    res.sendFile(path.join(__dirname,`../views/boards/create.html`))
}

// post 요청으로 게시글을 생성하는 역할
const postCreate = (req, res) => {
    const { userId, title, content } = req.body;

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
    
}

const getView = (req, res) => {
    const { key } = req.params
    
    const board = boards.find((board) => board.key == key)
    res.render("boards/view.html", {
        board
    })
    
}

const getModify = (req, res) => {
    const { key } = req.params
    
    const board = boards.find((board) => board.key == key)
    res.render("boards/modify.html", {
        board
    })
}

const postModify = (req, res) => {
    const { key } = req.params
    const { userId, title, content } = req.body
    boards.forEach((board) => {

        if (board.key == key) {
            board.userId = userId
            board.title = title
            board.content = content
            board.updated_at = `${date}업뎃함`
        }
    })
    res.redirect("/boards");
}
    // for(let i = 0; i < replyData.length; i++) {
    //    if(replyData[i].replyId === replyId) {
    //         replyData.splice(replyIndex, 1);
    //         break;
    //    }

    // }

const getDelete = (req, res) => {
    const { key } = req.params
    for (let i = 0; i < boards.length; i++) {
        if (boards[i].key == key) {
        boards.splice(i, 1);
        break;
        }
    }
    res.redirect("/boards");
}

module.exports = {
    getList,
    getCreate,
    postCreate,
    getView,
    getModify,
    postModify,
    getDelete
}