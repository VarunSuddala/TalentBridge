const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Assessment title is required"]
    },
    category: {
        type: String,
        enum: ["DSA", "Aptitude", "Technical", "FullStack"],
        required: true
    },
    difficulty: {
        type: String,
        enum: ["Easy", "Medium", "Hard"],
        required: true
    },
    duration: {
        type: Number, // minutes
        required: [true, "Duration is required"]
    },
    totalMarks: {
        type: Number,
        required: [true, "Total marks is required"]
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    unlockedFor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Batch"
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Assessment = mongoose.model("Assessment", assessmentSchema);
module.exports = Assessment;
