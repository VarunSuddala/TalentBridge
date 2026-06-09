const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController.js");
const User = require("../models/user.js");

router.get("/", (req, res) => {
    res.send("Auth is working");
});

router.post("/register", async (req, res) => {

    const { name, email, password, role } = req.body;

    const user = {
        "name": name,
        "email": email,
        "password": password,
        "role": role
    };
    const result = await register(user);
    if (!result.status) {
        return res.status(400).json({ msg: result.msg })
    }
    res.status(201).json({ msg: result.msg });

});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const result = await login(email, password);

    if (!result.status) {
        return res.status(404).json({ msg: result.msg });
    }
    res.status(200).json({ msg: result.msg, user: result.user });

});

router.post("/logout", async (req, res) => {

    req.session.destroy(() => {
        res.clearCookie('connect.sid');
        res.json({ message: 'Logged out' });
    });

});

module.exports = router;