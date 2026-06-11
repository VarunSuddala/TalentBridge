const mongoose = require("mongoose");

const trainingProgressSchema = new mongoose.Schema({
    batchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Batch",
        required: true
    },
    topic: {
        type: String,
        required: [true, "Topic name is required"]
    },
    completedAt: {
        type: Date,
        default: Date.now
    },
    markedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const TrainingProgress = mongoose.model("TrainingProgress", trainingProgressSchema);
module.exports = TrainingProgress;
