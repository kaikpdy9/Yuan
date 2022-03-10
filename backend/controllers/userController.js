import User from "../model/userModel.js";
import asyncHandler from "express-async-handler"
import generateToken from "../utils/generateToken.js";



//  @desc   Register a new user
//  @route  POST /api/users
//  @access  Public
const registerUser = asyncHandler(async (req,res)=>{
    console.log(req.body,'reqq');

    const {name,email,password}=req.body;
    const UserExists = await User.findOne({email})

    if(UserExists){
        res.status(400)
        throw new Error('User already exists')
    }
    const user = await User.create({
        name,
        email,
        password
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    }else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})

export {
    registerUser
}