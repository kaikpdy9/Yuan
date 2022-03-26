import express from "express"
import dotenv from "dotenv"
import connectDB from "./backend/config/db.js"
import userRoutes from "./backend/routes/userRoutes.js";
import sendEmailRoutes from "./backend/routes/sendEmailRoutes.js";
import ReviewRoutes from "./backend/routes/reviewRoutes.js";
import cors from "cors"

dotenv.config()
connectDB()
const app =express()
app.use(cors())
app.use(express.json())

app.use('/api/users',userRoutes)
app.use('/api/send-email',sendEmailRoutes)
app.use('/api/review',ReviewRoutes)
app.listen(2026)