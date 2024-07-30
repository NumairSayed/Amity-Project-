import mongoose from "mongoose";
import Request from "../models/request.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addRequest = asyncHandler( async(req,res)=>{
    const {user, conversation} = req.body
    const date = new Date()

    const response = await Request.create({
        user,
        conversation,
    })

    return res.status(201).json( new ApiResponse(201, response))
})

const getAllRequests = asyncHandler( async(req,res)=>{
    const response = await Request.find({})
    return res.status(200).json( new ApiResponse(200, response))
})

const getRequest = asyncHandler( async(req,res)=>{
    const response = await Request.findById()
    return res.status(200).json( new ApiResponse(200, response))
})

const getMyRequest = asyncHandler( async(req,res)=>{
    const user = req.user;
    const response = await Request.findById(user._id, {})

    return res.status(200).json( new ApiResponse(201, response))
})

export { addRequest, getAllRequests, getRequest, getMyRequest }