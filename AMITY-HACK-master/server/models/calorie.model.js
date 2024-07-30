import mongoose from "mongoose";

const calorieSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date,
    },
    calories: {
        type: Number,
    },
    meal: {
        type: String,
    },
}, { timestamps: true })

const Calorie = mongoose.model("Calorie", calorieSchema);

export default Calorie;