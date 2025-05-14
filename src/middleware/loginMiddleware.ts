
import { Request, Response, NextFunction } from "express";
import loginTypes from "../zod_types/loginTypes";
import logAuthEvent from "../utils/logger";


const loginMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  const body = req.body;
  logAuthEvent(`login username=${body?.userName}`);

  const { success } = loginTypes.safeParse(body);

  if (!success) {
    return res.status(401).json({
      message: "Invalid inputs",
    });
  }
  next();
};

export default loginMiddleware;
