const express = require("express");

const router = express.Router();
const user = require("../controllers/userController");

router.post("/add", user.addOrUpdateUser);
router.post("/update", user.addOrUpdateUser);
router.get("/", user.getUsers);
router.get("/getUser", user.getUser);
router.delete("/delete", user.deleteUser);

module.exports = router;
