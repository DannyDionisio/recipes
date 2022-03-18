const express = require("express");
const list = require("./list");
const create = require("./create");
const router = express.Router();

router.get("/", list);
router.post("/", create);

module.exports = router;
