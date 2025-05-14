import { Router } from "express";
import signupMiddleware from "../middleware/signupMIddleware";
import loginMiddleware from "../middleware/loginMiddleware";
import signupController from "../controllers/signupController";
import loginController from "../controllers/loginController";

const authRoutes = Router();


authRoutes.post("/signup",signupMiddleware,signupController);

authRoutes.post("/login",loginMiddleware,loginController);

export default authRoutes;