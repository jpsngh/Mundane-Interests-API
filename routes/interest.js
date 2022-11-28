import { body, validationResult } from "express-validator";

import express from "express";
import Int from "../models/Interests.js";


import fetchUser from "../middleware/fetchUser.js";
import {fetchMyNotes,  fetchallnotes } from "../controllers/fetchmynotes.js";
import addInterest from "../controllers/addInterest.js";
import updateInterest from "../controllers/updateInterest.js";
import deleteInterest from "../controllers/deleteInterest.js";
const router = express.Router();

router.all("/fetchmynotes", fetchUser,fetchMyNotes )

router.all("/fetchcategorynotes/:category",fetchallnotes)

  router.get(
    "/addinterest",fetchUser,
    [body("description", "enter a valid experience or opinion").isLength({ min: 15 })],
  addInterest)
  router.put(
    "/updateinterest/:id",fetchUser,
    [body("description", "enter a valid experience or opinion").isLength({ min: 15 })],updateInterest
  )
      router.delete(
        "/deletenote/:id",fetchUser,deleteInterest
      )
    

    

 export default router