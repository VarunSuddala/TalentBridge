const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    assessmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assessment",
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    totalMarks: {
        type: Number,
        required: true
    },
    rank: {
        type: Number
    },
    attemptedAt: {
        type: Date,
        default: Date.now
    }
});

const Result = mongoose.model("Result", resultSchema);
module.exports = Result;
