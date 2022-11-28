import mongoose, { Mongoose } from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    socials:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    },
})
const User = mongoose.model("user",userSchema);

export default User