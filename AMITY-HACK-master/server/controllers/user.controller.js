import User from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import bcrypt from "bcryptjs"
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const register = async (req, res) => {
    try {
        const user = new User(req.body)
        const token = await user.generateAuthToken()
        const refreshToken = await user.generateRefreshToken()
        user.refreshToken = refreshToken
        await user.save()
        res.status(201).send({ user, token, refreshToken })
    }
    catch (error) {
        throw new ApiError(400, error.message)
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            throw new Error("Invalid login credentials")
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (!isMatch) {
            throw new Error("Invalid login credentials")
        }
        const token = await user.generateAuthToken()
        const refreshToken = await user.generateRefreshToken()
        user.refreshToken = refreshToken
        await user.save()

        res
        .status(200)
        .cookie("accessToken", token, {
            httpOnly: true,
        })
        .send({ user, token, refreshToken })
    }
    catch (error) {
        throw new ApiError(400, error.message)
    }
}

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.send(users)
})

const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params._id)
    if (!user) {
        throw new ApiError(404, "User not found")
    }

    res.status(200).json(new ApiResponse(200, user))
})

const updateUser = asyncHandler(async (req, res) => {
    console.log(req.params)
    const user = await User.findByIdAndUpdate(req.params._id, req.body, { new: true })
    if (!user) {
        throw new ApiError(404, "User not found")
    }
    res.status(200).json(new ApiResponse(200, user))
})



export { register, login, getAllUsers, getUser, updateUser };



