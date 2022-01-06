const express = require("express");
const globalController = require("../controllers/global-controllers");

const router = express.Router();

router.get("/getProjects", globalController.getProjects);

router.get("/getAProject/:pId", globalController.getAProject);

router.post("/consultationRequest", globalController.consultationRequest);

module.exports = router;
