// require('dotenv').config({path: './env'});

import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
  path : './env'
});

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log("Connected server")
  })
})
.catch((err) => {
  console.log("connection failed ", err);
})




















// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from 'express';
// const app = express();

// ( async ()=>{
//     try{
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//       app.on("error",(Error)=>{
//         console.log("Na man");
//         throw error
//       })
//       app.listen(process.env.PORT, ()=>{
//         console.log("App is running")
//       })
//     }catch(error){
//         console.log("Error",error);
//         throw err;
//     }
// })()
