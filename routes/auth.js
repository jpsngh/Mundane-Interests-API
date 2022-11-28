import express from "express";
import User from "../Models/User.js";
import mongoose from "mongoose";
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fetchuser from "../middleware/fetchuser.js"
import getUser from "../controllers/getuser.js";
import createUser from "../controllers/createuser.js";
import login from "../controllers/login.js";

const JWT_SECRET = "HEY THERE"
const router = express.Router();

router.all("/createuser",[
  body("email","put valid email").isEmail(),body("password","enter at least at digits").exists().isLength({min:5})],createUser)
router.all("/login",[
  body("email","put valid email").isEmail(),body("password","enter at least at digits").exists().isLength({min:5})],login)


router.all("/getuser",fetchuser,getUser);
export default router;





