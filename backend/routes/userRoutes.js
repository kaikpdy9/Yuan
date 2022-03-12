import express from "express";
import {registerUser} from "../controllers/userController.js";
import {protect} from "../middleware/authMiddleware.js"

const userRoutes=express.Router();

userRoutes.route('/').post(registerUser).get(protect)

export default userRoutes