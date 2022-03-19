import express from "express";
import {registerUser,authUser} from "../controllers/userController.js";
import {protect} from "../middleware/authMiddleware.js"

const userRoutes=express.Router();

userRoutes.route('/').post(registerUser).get(protect)
userRoutes.route('/login').post(authUser)

export default userRoutes