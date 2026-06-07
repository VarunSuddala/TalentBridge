const mongoose = require("mongoose");

const studentProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    firstName: {
        type: String,
        required: [true, "first name is required"]
    },

    lastName: {
        type: String,
        required: [true, "last name is required"]
    },

    rollNumber: {
        type: String,
        required: [true, "rollNumber is required"],
        unique: [true, "rollNumber already exists"]
    },

    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email already exists"]
    },

    phone: {
        type: String,
        required: [true, "phone is required"],
        unique: [true, "phone already exists"]
    },

    branch: {
        type: String,
        required: [true, "branch is required"],
        enum: [
            "CSE",
            "ECE",
            "IT",
            "EEE",
            "MECH",
            "CIVIL"
        ]

    },
    graduationYear: {
        type: Number,
        required: [true, "graduationYear is required"],
        min: 2000,
        max: 2030
    },

    cgpa: {
        type: Number,
        required: [true, "cgpa is required"],
        min: 0.0,
        max: 10.0
    },

    sscPercentage: {
        type: Number,
        required: [true, "sscPercentage is required"],
        min: 0.0,
        max: 100.0
    },

    interPercentage: {
        type: Number,
        required: [true, "interPercentage is required"],
        min: 0.0,
        max: 100.0
    },

    backlogs: {
        type: Number,
        required: [true, "backlogs is required"]
    },

    skills: {
        type: [String]
    },

    certifications: {
        type: [String]
    },

    projects: {
        type: [String]
    },

    githubUrl: {
        type: String
    },

    linkedinUrl: {
        type: String
    },

    resumeUrl: {
        type: String
    },

    points: {
        type: Number,
        default: 0
    },

});

const StudentProfile = mongoose.model("StudentProfile", studentProfileSchema);
module.exports = StudentProfile;