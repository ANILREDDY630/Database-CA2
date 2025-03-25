import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try {
        mongoose
        .Connect(process.env.MONGO_URI)
        .then(console.log("MongoDB is connected"))
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;