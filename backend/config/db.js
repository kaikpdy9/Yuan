import mongoose from 'mongoose'


const connectBD = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('链接成功')
    } catch (error){
        console.log(error)
        process.exit(1)
    }
}

const db = mongoose.connection


export default connectBD