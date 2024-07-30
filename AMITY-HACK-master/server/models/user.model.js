import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    refreshToken: {
        type: String,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
    },
    height: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    bmi: {
        type: Number,
    },
    goals: {
        type: Array,
    },
    allergies: {
        type: Array,
    },
    isDiabetic: {
        type: Boolean,
    },
    isHighBP: {
        type: Boolean,
    },
    isPregnant: {
        type: Boolean,
    },
}, { timestamps: true })

userSchema.pre("save", async function (next) {
    const user = this
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "10h" })
    return token
}

userSchema.methods.generateRefreshToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })
    return token
}


const User = mongoose.model("User", userSchema)

export default User