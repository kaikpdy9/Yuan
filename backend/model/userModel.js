import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
        },
        email:{
          type:String,
          required: true,
          unique: true,
        },
        password:{
            type:String,
            require: true
        },
    },
    {
        timestamps:true
    }
)

userSchema.methods.matchPassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password)
}

const User = mongoose.model('User',userSchema)

export default User