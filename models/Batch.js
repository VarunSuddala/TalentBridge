const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Batch name is required"]
    },
    trainerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    tpoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Batch = mongoose.model("Batch", batchSchema);
module.exports = Batch;
