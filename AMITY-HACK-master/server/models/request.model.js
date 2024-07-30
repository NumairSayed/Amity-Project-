import mongoose from "mongoose";


const requestSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    conversation: {
        type: Array,
    },
}, { timestamps: true })

const Request = mongoose.model("Request", requestSchema);

export default Request;
