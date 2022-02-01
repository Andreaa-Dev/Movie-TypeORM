import { InternalServerError } from "./../helpers/apiError";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";

import { User } from "./../entity/User";
import UserService from "../services/user";
import { BadRequestError } from "../helpers/apiError";
import { JWT_SECRET } from "../../util/secrets";

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

    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.phoneNumber = phoneNumber;
    user.email = email;
    user.password = hashedPassword;

    await UserService.createUser(user);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userGoogleData = req.user as User;
    console.log("i");
    const { email, firstName, lastName, image } = userGoogleData;
    const token = jwt.sign(
      {
        email: req.body.email,
        firstName: req.body.firstName,
        image: req.body.picture,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token, userGoogleData });
  } catch (error) {
    return next(new InternalServerError());
  }
};
