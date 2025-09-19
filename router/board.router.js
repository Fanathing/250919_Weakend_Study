const express = require("express");
const boardController = require("../controllers/board.controller.js");

const router = express.Router();
router.get("/", boardController.getList);

module.exports = router;

