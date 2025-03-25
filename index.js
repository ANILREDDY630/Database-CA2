import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import Restaurant from "./RestaurantSchema";
// import connectDB from "./config/Db";
dotenv.config();
// connectDB();
const app = express();
app.use(express.json());
// PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port = ${PORT}`);
})
