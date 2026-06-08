
const express = require("express");
const router = express.Router();


router.get("/me", (req, res) => {
    res.json({
        "msg": "/me is working fine"
    });
});

router.put("/student", (req, res) => {
    res.json({
        "msg": "/student is working"
    });
});

router.post("/student/resume", (req, res) => {
    res.json({
        "msg": "resume uploaded"
    });
});

router.put("/student/links", (req, res) => {
    res.json({
        "msg": "links updated"
    });
});






module.exports = router;
