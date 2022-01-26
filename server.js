import express from "express"
import dotenv from "dotenv"


dotenv.config()
const app =express()

app.use('/api/users',()=>{
    console.log('hiya')
})
app.listen(5000)