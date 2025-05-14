import User from "../model/userModel";
import { Response,Request } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


const loginController =async (req:Request,res:Response)=>{

   try{
    const {userName,password} = req.body as any;
    const secrete = process.env.SECRETE as string;


    
    const response = await User.findOne({
        userName,
    });

    if(!response){
        res.status(401).json({
            message:"Invalid username or password",
        })
        return;
    }

    const isMatch = await bcrypt.compare(password,response.password);

    if(!isMatch){
        res.status(401).json({
            message:"Invalid username or password",
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

      res.status(200).json({
        message:"Login successfully",
      })


   }catch(e:any){
    console.log(e.message);
     res.status(500).json({
        message:"Internal server error.",
     });
   }
}

export default loginController;