import mongoose from "mongoose"

console.log(process.env.MONGO_URL)

const connectDB= async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/please',{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
    }catch (error){
        console.log(error)
        process.exit(1)
    }
}

const db =mongoose.connection

export default connectDB()