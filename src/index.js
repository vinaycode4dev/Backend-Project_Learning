//Inconsistent - require('dotenv').config({path: './env'})
import dotenv from "dotenv"

import connecDB from "./db/index_db.js";

dotenv.config({
    path:'./env'
})


//Approach 2.

// console.log("ENV:", process.env.MONGODB_URI);

connecDB();






/*
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import express from "express";

//Approach 1. - by IFIE (Immidetly execute kerdo) - acha but index file polute ker diya hai kafi chize bhar di hai
// Database Connection and Express app listerner

const app = express(); 

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        //Adding listenres
        app.on("error",(err)=>{
            console.log("ERROR:", err);
            throw err;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on PORT: ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("ERROR: ",error);
        // console.error("ERROR: ",error);
        throw error;
    }
})()
*/

//Approach 2.