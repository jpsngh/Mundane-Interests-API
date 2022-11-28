import express from "express";
import connectDB from "./db.js";
import {body,validationResult} from "express-validator"
import authRoute from "./routes/auth.js"
import intRoute from "./routes/interest.js"

const app = express();
app.use(express.json());
connectDB();

app.use("/api/auth",authRoute);
app.use("/api/interest",intRoute);


app.listen(4000);