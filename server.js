const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const User = require("./models/User");
const StudentProfile = require("./models/StudentProfile.js");
const port = process.env.PORT;
const authRoutes = require("./routes/authroutes.js");
const profileRoutes = require("./routes/profileroutes.js");
const session = require("express-session");
const cors = require("cors");

connectDB();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello , wellcome to talentBridge API");
});

