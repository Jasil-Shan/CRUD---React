import { Express } from "express";
import mongoose from "mongoose";
import cors from 'cors'
import dbConnect from "./config/dbConnect.js"
import cookieParser from 'cookie-parser';
import userRouter from './routers/userRouter.js'
import adminRouter from './routers/adminRouter.js'
import path from 'path'

const app = Express()





app.listen(4000,()=>{
    console.log("Server running port 4000");
})