import { body, validationResult } from "express-validator";


import Int from "../models/Interests.js";




const addInterest =async (req, res) => {
    try{
    const { title, description, category } = req.body;
    const user = (req.user.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const note = new Int({
      title,
      description,
      category,
      user 
    });
    const savedNote = await note.save();
    res.json(savedNote);
}
catch(error){
    res.status(400).json({"error":error.message})
}
  }

  export default addInterest
