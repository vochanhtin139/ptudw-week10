const express = require("express");
const router = express.Router();
const controller = require("../controllers/authController");

router.get("/", controller.showIndex);
router.get("/profile", controller.isLoggedIn, controller.showProfile);

router.get("/login", controller.showLogin);
router.get("/register", controller.showRegister);

router.post("/register", controller.register)
router.post("/login", controller.login)

router.get("/logout", controller.logout)

module.exports = router;
