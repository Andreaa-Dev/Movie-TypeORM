import { User } from "./../entity/User";
import { BadRequestError } from "./../../helpers/apiError";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";

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
    const existEmail = await UserService.findUserByEmail(req.body.email);
    if (existEmail) {
      next(new BadRequestError("Email has already taken"));
    }
    if (!req.body.password) {
      next(new BadRequestError("Missing password"));
    }

    const { firstName, lastName, phoneNumber, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      firstName,
      lastName,
      phoneNumber,
      email,
      password: hashedPassword,
    });

    await UserService.createUser(user);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
