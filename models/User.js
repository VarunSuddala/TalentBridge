const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name must be filled"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "email must be unique"],
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "must be 8 characters"]
    },
    role: {
        type: String,
        enum: ["admin", "tpo", "trainer", "student", "recruiter"],
        default: "student"
    },
    refreshToken: {
        type: String,
        required: false,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;