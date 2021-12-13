const express = require("express");

const adminController = require("../controllers/admin-controllers");

const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("/signup", adminController.signup);

router.post("/login", adminController.login);

router.use(checkAuth);

router.post("/createProject", adminController.createProject);

router.delete("/deleteProject", adminController.deleteProject);

module.exports = router;
module.exports = router;
