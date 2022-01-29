import { BadRequestError } from "../helpers/apiError";
import { Request, Response, NextFunction } from "express";

import MovieService from "../services/movie";
import { Movie } from "../entity/Movie";

//create movie
export const createMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, duration, year, rating, review } = req.body;
    const movie = new Movie();
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
