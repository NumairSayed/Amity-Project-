import e from "express";
import Doctor from "../models/doctor.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addDoctor = asyncHandler( async(req,res)=>{
    const {name, email, password, age} = req.body

    const response = await Doctor.create({
        name,
        email,
        password,
        age
    })



    return res.status(201).json( new ApiResponse(201, response))
})

export { addDoctor }