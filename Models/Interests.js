import mongoose from "mongoose";

const {Schema} = mongoose;


const intSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'

    },
   
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
 
    date:{
        type:Date,
        default: Date.now
    },
});
const Int = mongoose.model('interest',intSchema)

export default Int