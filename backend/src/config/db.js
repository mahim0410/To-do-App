import mongoose from 'mongoose';
import dotenv from "dotenv";
import 'dotenv/config';
dotenv.config();


const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_KEY)
        console.log("mongodb connected")
    } catch (error) {
        console.error(error)
    }
}

export default connectDB;