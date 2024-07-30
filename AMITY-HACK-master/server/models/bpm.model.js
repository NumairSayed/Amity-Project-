import mongoose from "mongoose";

const bpmSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date,
    },
    bpm: {
        type: Number,
    },
}, { timestamps: true })

const Bpm = mongoose.model("Bpm", bpmSchema);

export default Bpm;