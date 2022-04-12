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

userSchema.methods.matchPassword =  function(enterPassword){
    if (enterPassword===this.password){
        return true
    }else {
        return false
    }
}

const User = mongoose.model('User',userSchema)

export default User