

import User from "../Models/User.js";

import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const JWT_SECRET = "HEY THERE"

const createUser = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    const password = req.body.password;
    const secpswd = await bcrypt.hash(password, salt);
  
    const user = await User.create({
      email: req.body.email,
      name: req.body.name,
      password: secpswd,
      socials: req.body.socials,
    }).catch((err) => {
      err: err.message;
    });
    
  
    const data = {
      user: {
        id:user.id,
      }
  }
    
  
    const token = jwt.sign(data, JWT_SECRET);
  
    res.json(token);
  
  }

  export default createUser
  