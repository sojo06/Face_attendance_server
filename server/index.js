import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userroutes from "./Routes/userroutes.js"
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())
app.use("/api",userroutes);
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to database");
    
})
const port = process.env.PORT
const server = app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
