import express from "express";

const userRoutes=express.Router();

userRoutes.get('/',()=>{
    console.log('132')
})

export default userRoutes