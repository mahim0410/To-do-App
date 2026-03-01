import express from 'express';
import app from "./src/app.js";
import connectDB from "./src/config/db.js"
import dotenv from "dotenv";
import 'dotenv/config';
dotenv.config();



connectDB().then(() => {
    console.log("Connected to MongoDB")
    app.listen(5001, () => {
        console.log('Server is running on port 5001');
    });
}).catch((error) => {
    console.log("Error connecting to MongoDB", error)
});