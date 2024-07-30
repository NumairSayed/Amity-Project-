import mongoose from "mongoose";

import Calorie from "../models/calorie.model.js";

import { ApiResponse } from "../utils/apiResponse.js";

import { asyncHandler } from "../utils/asyncHandler.js";

const addCalorie = asyncHandler( async(req,res)=>{
    const {user, calories, meal} = req.body
    const date = new Date()

    const response = await Calorie.create({
        user,
        calories,
        meal,
        date
    })

    return res.status(201).json( new ApiResponse(201, response))
})

const getCalorie = asyncHandler( async(req,res)=>{
    const {user} = req.body
    const response = await Calorie.find({user})


    return res.status(200).json( new ApiResponse(200, response))
})

export { getCalorie, addCalorie }