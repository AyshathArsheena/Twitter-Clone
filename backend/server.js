import express from "express";
import authRoutes from "./router/auth.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongodb.js";



const app=express();

//to read value from .env file
dotenv.config();

const port = process.env.PORT;
console.log(process.env.Mongo_URI);
//middleware
app.use("/api/auth",authRoutes);

// app.get("/",(req,res) => {
//     res.send("server is ready")
// });


app.listen(port, () => {
    console.log(`server is running on port ${ port}`);
    connectMongoDB();
});
