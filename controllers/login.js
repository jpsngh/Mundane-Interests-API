
import express from "express";
import User from "../Models/User.js";
import mongoose from "mongoose";
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const JWT_SECRET = "HEY THERE"

const login =async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() });
    }
  const {email,password}= req.body
    const user = await User.findOne({email});
    if (!email){ return res.status(404).json("Not right credentials")}
    
    const pass = bcrypt.compare(password,user.password);
    if(!pass){ return res.status(404).json("Not right credentials")}
  
    const data = {
     user: {
       id:user.id
      }
    }
  
  
  const token = jwt.sign(data,JWT_SECRET);
  res.json(token);
  
  }

  export default login