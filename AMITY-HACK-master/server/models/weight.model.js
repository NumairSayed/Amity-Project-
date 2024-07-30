import mongoose from "mongoose";

const weightSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date,
    },
    weight: {
        type: Number,
    },
}, { timestamps: true })

const Weight = mongoose.model("Weight", weightSchema);

export default Weight