const mongoose = require("mongoose");

const studentProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    rollNumber: {
        type: String,
        required: [true, "rollNumber is required"],
        unique: [true, "rollNumber already exists"]
    },
    branch: {
        type: String,
        required: [true, "branch is required"]
    },
    department: {
        type: String,
        required: [true, "department is required"]
    },
    graduationYear: {
        type: Number,
        required: [true, "graduationYear is required"]
    },
    cgpa: {
        type: Number,
        required: [true, "cgpa is required"],
        min: 0.0,
        max: 10.0
    },
    skills: {
        type: [String],
        default: []
    },
    resumeUrl: {
        type: String
    },
    github: {
        type: String
    },
    linkedin: {
        type: String
    },
    backlogs: {
        type: Number,
        required: [true, "backlogs is required"],
        default: 0
    },
    points: {
        type: Number,
        default: 0
    },
    // Keep additional fields for compatibility with existing scripts/data
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phone: {
        type: String
    },
    sscPercentage: {
        type: Number
    },
    interPercentage: {
        type: Number
    },
    certifications: {
        type: [String],
        default: []
    },
    projects: {
        type: [String],
        default: []
    },
    email: {
        type: String
    }
});

const StudentProfile = mongoose.model("StudentProfile", studentProfileSchema);
module.exports = StudentProfile;
