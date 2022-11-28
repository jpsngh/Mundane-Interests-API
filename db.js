import mongoose from "mongoose";
 const mongoURI= "mongodb://localhost:27017/mundane"
const connectDB=()=>{
mongoose.connect(mongoURI,async()=>{
    console.log("db connected");
}).catch(err =>  console.log(err))
    

console.log("db connected 2")

}

export default connectDB