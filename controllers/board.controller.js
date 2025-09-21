const boards = require("../db/boards.data.js");
const path = require("path");

// 생성일을 선언
const now = new Date();
const date = `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}`


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

    const key =  String(Date.now());

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

// 상세 페이지와 연결해주는 역할
const getView = (req, res) => {
    const { key } = req.params
    
    const board = boards.find((board) => board.key === key)
    res.render("boards/view.html", {
        board
    })
    
}

// 수정페이지로 연결해주는 역할
const getModify = (req, res) => {
    const { key } = req.params
    
    const board = boards.find((board) => board.key === key)
    res.render("boards/modify.html", {
        board
    })
}

// key값과 비교하여 특정한 게시글의 내용을 업데이트 하는 역할
const postModify = (req, res) => {
    const { key } = req.params
    const { userId, title, content } = req.body
    boards.forEach((board) => {

        if (board.key === key) {
            board.userId = userId
            board.title = title
            board.content = content
            board.updated_at = `${date}업뎃함`
        }
    })
    res.redirect("/boards");
}

//key 값을 비교해서 boards 안에서 특정한 배열을 삭제하는 역할
const getDelete = (req, res) => {
    const { key } = req.params
    for (let i = 0; i < boards.length; i++) {
        if (boards[i].key === key) {
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