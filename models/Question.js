const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    assessmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assessment",
        required: true
    },
    questionText: {
        type: String,
        required: [true, "Question text is required"]
    },
    options: {
        type: [String],
        required: [true, "Options are required for MCQs"],
        default: []
    },
    correctAnswer: {
        type: String,
        required: [true, "Correct answer is required"]
    },
    marks: {
        type: Number,
        required: [true, "Marks field is required"]
    },
    difficulty: {
        type: String,
        enum: ["Easy", "Medium", "Hard"],
        required: true
    }
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
