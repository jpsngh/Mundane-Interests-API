
import { body, validationResult } from "express-validator";


import Int from "../models/Interests.js";

const deleteInterest =async (req, res) => {
    try{
    

    let note =  await Int.findById(req.params.id);
    if(!note){res.status(404).send("Not found")}

    if(note.user.toString("hex")!== req.user.id){
      res.status(401).send("Not authorized")
    }
    note = await Int.findByIdAndDelete(req.params.id)
    res.json({note:note,message:"note deleted"})
  }
catch(error){
    res.status(400).json({"error":error.message})
}}

export default deleteInterest