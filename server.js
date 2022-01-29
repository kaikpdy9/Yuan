import express from "express"
import dotenv from "dotenv"
import connectDB from "./backend/config/db.js"

dotenv.config()
connectDB()
const app =express()

app.use('/api/users',()=>{
    console.log('hiya')
})
app.listen(5000)