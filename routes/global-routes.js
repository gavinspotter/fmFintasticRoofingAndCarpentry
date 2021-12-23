const express = require("express");
const globalController = require("../controllers/global-controllers");

const router = express.Router();

router.get("/getProjects", globalController.getProjects);

module.exports = router;
