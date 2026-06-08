const express = require("express");
const router = express.Router();
const { HashPassword, comparePassword } = require("../controllers/authController.js");

router.get("/", (req, res) => {
    res.send("Auth is working");
});

router.post("/register", (req, res) => {

    const { name, email, password, role } = req.body;

    const user = {
        "name": name,
        "email": email,
        "password": HashPassword(password),
        "role": role
    };
    res.json({
        "msg": "registration successfull",
        "user": user
    });

});

module.exports = router;