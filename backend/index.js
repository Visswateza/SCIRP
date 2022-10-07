import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to mongoDB..")
    } catch (error) {
        throw error;
    }
};

app.listen(8000, ()=> {
    console.log("connected to backend server..")
    connect()
})