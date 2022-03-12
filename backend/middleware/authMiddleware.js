import jwt from 'jsonwebtoken'
import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";

const protect = asyncHandler(async (req,res,next)=>{
    console.log(req.headers)
    next()
})

export {protect}