import mongoose from "mongoose";
import Weight from "../models/weight.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addWeight = asyncHandler( async(req,res)=>{
    const {user, weight} = req.body
    const date = new Date()

    const response = await Weight.create({
        user,
        weight,
        date
    })

    return res.status(201).json( new ApiResponse(201, response))
})

const getWeight = asyncHandler( async(req,res)=>{
    const {user} = req.body
    const response = await Weight.find({user})

    return res.status(200).json( new ApiResponse(200, response))
})

export { getWeight, addWeight }