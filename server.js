import express from "express"
import dotenv from "dotenv"
import connectDB from "./backend/config/db.js"
import userRoutes from "./backend/routes/userRoutes.js";

dotenv.config()
connectDB()
const app =express()

app.use('/api/users',userRoutes)
app.listen(5000)