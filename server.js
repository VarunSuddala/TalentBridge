const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const User = require("./models/user");
const StudentProfile = require("./models/studentProfiles.js");
const port = process.env.PORT;
const authRoutes = require("./routes/authroutes.js");
const profileRoutes = require("./routes/profileroutes.js");

connectDB();




const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// console.log("authRoutes:", authRoutes);
// console.log("profileRoutes:", profileRoutes);
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello , wellcome to talentBridge API");
});

