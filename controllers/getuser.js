

import User from "../Models/User.js";
import jwt from "jsonwebtoken";
import fetchuser from "../middleware/fetchuser.js"

const getUser = async (req,res)=>{

    let userId = req.user.id;
    console.log("hey")
    const user = await User.findById(userId).select("-password");
    console.log("hey1")
    res.json(user)
  
  }
  export default getUser 