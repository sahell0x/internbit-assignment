import User from "../model/userModel";
import { Response,Request } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


const signupController =async (req:Request,res:Response)=>{

   try{
    const {userName,password} = req.body as any;
    const secrete = process.env.SECRETE as string;

    const hashedPassword = await bcrypt.hash(password, 13);

    const isExist = await User.findOne({userName});

    if(isExist){
        res.status(409).json({
            message:"Username is already in use.",
        })
        return;
    }

    const response = await User.create({
        userName,
        password:hashedPassword,
    });


    if(!response){
        res.status(401).json({
            message:"Invalid payload",
        })
        return;
    }

    const token = jwt.sign({id:response._id,userName:response.userName}, secrete);

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.status(201).json({
        message:"User created successfully",
      })


   }catch(e:any){
    console.log(e.message);
     res.status(500).json({
        message:"Internal server error.",
     });
   }
}

export default signupController;