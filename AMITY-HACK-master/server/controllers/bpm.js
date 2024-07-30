import Bpm from "../models/bpm.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addBpm = asyncHandler( async(req,res)=>{
    const {user, bpm} = req.body
    const date = new Date()

    const response = await Bpm.create({
        user,
        bpm,
        date
    })

    return res.status(201).json( new ApiResponse(201, response))
})

const getBpm = asyncHandler( async(req,res)=>{
    const {user} = req.body
    const response = await Bpm.find({user})

    return res.status(200).json( new ApiResponse(200, response))
})
export { getBpm, addBpm }