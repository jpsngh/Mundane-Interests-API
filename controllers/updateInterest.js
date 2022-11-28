

import { body, validationResult } from "express-validator";


import Int from "../models/Interests.js";





const updateInterest=async (req, res) => {
    try{
    const { title, description, category } = req.body;
    const user = (req.user.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });}

      const newNote = {};
      if(title){newNote.title=title}
      if(description){newNote.description=description}
      if (category){newNote.category=category}

      
      const note = await Int.findById(req.params.id)
      if(!note){return res.json("not found")}



      else if (note.user.id.toString("hex")!==req.user.id){
          console.log(req.user.id)
          console.log(note.user.id.toString("hex"))
          
          return res.status(404).json("unauthorized user")
      }
      else{
      const Note = await Int.findByIdAndUpdate(req.params['id'],{$set:newNote},{new:true})
      res.send(Note);
      }
    }
  
    catch(error){
      res.status(400).json({"error":error.message})
  }
    
    }

    export default updateInterest