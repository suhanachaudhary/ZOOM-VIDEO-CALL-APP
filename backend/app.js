import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { createServer } from "node:http";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/user.router.js";
const app=express();
const server=createServer(app);
const io=connectToSocket(server);

app.set("port",(process.env.PORT || 8080));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

app.use("/api/v1/users",userRoutes);

const start=async()=>{
    app.set("mongo_user");
    const connectionDb=await mongoose.connect("mongodb+srv://suhanachaudhary212:EGtuQRr2IPrMvxut@cluster0.ivu0f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    console.log(`mongo db connected at host :${connectionDb.connection.host}`);
    
    server.listen(app.get("port"),()=>{
    console.log(`app is listening at port 8080`);
});
}
start();