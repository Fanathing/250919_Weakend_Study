const boards = require("../db/boards.data.js");
const path = require("path");


const getList = (req, res) => {
    res.render("boards/list.html", {
        boards
    })
}

module.exports = {
    getList
}