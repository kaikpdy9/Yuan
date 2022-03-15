import express from "express"
import dotenv from "dotenv"
import connectDB from "./backend/config/db.js"
import userRoutes from "./backend/routes/userRoutes.js";
import sendEmailRoutes from "./backend/routes/sendEmailRoutes.js";
import ReviewRoutes from "./backend/routes/reviewRoutes.js";

dotenv.config()
connectDB()
const app =express()
app.use(express.json())

app.use('/api/users',userRoutes)
app.use('/api/send-email',sendEmailRoutes)
app.use('/api/review',ReviewRoutes)
app.listen(6000)