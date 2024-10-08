import express from "express";
import { createServer } from "node:http";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/user.router.js";

import dotenv from 'dotenv';
dotenv.config();


const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const dburl=process.env.MONGODB_URL;

if (!dburl) {
    console.error('MONGODB_URL is not defined in the environment variables.');
    process.exit(1); // Exit process if no DB URL is provided
}

const start = async () => {
    app.set("mongo_user")

    try{
        const connectionDb = await mongoose.connect(dburl);

        console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
        
        server.listen(app.get("port"), () => {
            console.log("LISTENIN ON PORT 8000")
        });
    }catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit process on connection error
    }    

}

start();
