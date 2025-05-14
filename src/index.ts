import express, { NextFunction,Request,Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT || "3000";

const dbUrl = process.env.DB_URL as string;

app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      credentials: true,
    })
  );


  app.use(express.json())

  app.get("/helloworld", (req, res) => {
    res.send("Hello World!");
  });

  app.use("/v1/api/auth",authRoutes);


app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
    console.log(err);
    res.status(500).json({
        message:"Internal server error."
    })
});


app.listen(PORT,()=>{
    console.log(`app is listenig at port ${PORT}`);
})

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("connected to DB successfully");
  })
  .catch((err) => {
    console.log("error while connecting",err);
  });