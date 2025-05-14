
import { Request, Response, NextFunction } from "express";
import signupTypes from "../zod_types/signupTypes";
import logAuthEvent from "../utils/logger";

const signupMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  const body = req.body;
  logAuthEvent(`signup username=${body?.userName}`);
  const { success } = signupTypes.safeParse(body);

  if (!success) {
    return res.status(401).json({
      message: "Invalid inputs",
    });
  }
  next();
};

export default signupMiddleware;
