const express = require("express");
const boardController = require("../controllers/board.controller.js");

const router = express.Router();
router.get("/boards/create", boardController.getCreate);

module.exports = router;