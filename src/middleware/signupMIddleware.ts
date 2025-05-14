
import { Request, Response, NextFunction } from "express";
import signupTypes from "../zod_types/signupTypes";

const signupMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  const body = req.body;
  const { success } = signupTypes.safeParse(body);

  if (!success) {
    return res.status(401).json({
      message: "Invalid inputs",
    });
  }
  next();
};

export default signupMiddleware;
