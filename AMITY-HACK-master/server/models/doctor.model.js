import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const doctorSchema = new mongoose.Schema({
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
}, { timestamps: true })    

doctorSchema.pre("save", async function (next) {
    const doctor = this
    if (doctor.isModified("password")) {
        doctor.password = await bcrypt.hash(doctor.password, 8)
    }
    next()
})

doctorSchema.methods.generateAuthToken = async function () {
    const doctor = this
    const token = jwt.sign({ _id: doctor._id.toString() }, process.env.JWT_SECRET)
    return token
}   

const Doctor = mongoose.model("Doctor", doctorSchema)

export default Doctor
