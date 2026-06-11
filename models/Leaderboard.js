const mongoose = require("mongoose");

const leaderboardSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    points: {
        type: Number,
        default: 0,
        required: true
    },
    readinessScore: {
        type: Number,
        default: 0,
        required: true
    },
    batchRank: {
        type: Number
    },
    departmentRank: {
        type: Number
    },
    collegeRank: {
        type: Number
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);
module.exports = Leaderboard;
