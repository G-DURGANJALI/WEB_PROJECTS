import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import userRouter  from './routes/userRoute.js';
import jobRouter  from './routes/jobRouter.js';
import applicationRouter  from './routes/applicationRouter.js';
import {dbConnection } from './datadase/dbconnection.js'
import { errorMiddleware } from './middlewares/error.js';
const app =express();
dotenv.config({path : "./config/config.env"});
// cors for connecting frontened and backend 

app.use(
	cors({
	  origin: [process.env.FRONTEND_URL],
	  method: ["GET", "POST", "DELETE", "PUT"],
	  credentials: true,
	})
  );

app.use(cookieParser());
 //middle ware that parses only json type object 
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(fileUpload({
	useTempFiles:true,
	tempFileDir :"/temp/",
}));

app.use('/api/v1/user',userRouter);
app.use('/api/v1/application',applicationRouter);
app.use('/api/v1/job',jobRouter);
console.log("server created");

dbConnection();
app.use(errorMiddleware);
export default app;