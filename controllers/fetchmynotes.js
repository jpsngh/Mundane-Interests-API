
import Int from "../models/Interests.js";


import fetchUser from "../middleware/fetchUser.js";

const fetchMyNotes = async (req, res) => {
    const notes = await Int.find({ user: req.user.id });
    res.json(notes);
  }
 const fetchallnotes = async (req, res) => {
    const category = req.params['category']
    console.log(category);
    const notes = await Int.find({category:category}).populate({path:"user",model:"user",select:{"_id":0,"password":0,"email":0,date:0}})
    res.json(notes);
  };


  export  {fetchMyNotes,fetchallnotes}