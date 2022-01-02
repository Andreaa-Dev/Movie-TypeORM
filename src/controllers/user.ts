import { BadRequestError } from "./../../helpers/apiError";
import { Request, Response, NextFunction } from "express";

import UserService from "../services/user";

//create user
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body.email) {
      next(new BadRequestError("Missing email"));
    }
    const existEmail = await UserService.createUser;
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
