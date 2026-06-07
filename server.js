const express = require("express");

const connectDB = require("./config/db");
const User = require("./models/user");
const StudentProfile = require("./models/studentProfiles.js");
connectDB();

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello , wellcome to talentBridge API");
});

