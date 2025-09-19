const express = require("express");
const boardController = require("../controllers/board.controller.js");

const router = express.Router();
router.get("/", boardController.getList);
router.get("/create", boardController.getCreate);
router.post("/create", boardController.postCreate);
router.get("/view/:key", boardController.getView)


module.exports = router;

