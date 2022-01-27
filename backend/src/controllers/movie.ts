import { BadRequestError } from "./../../helpers/apiError";
import { Request, Response, NextFunction } from "express";

import MovieService from "../services/movie";

//create movie
export const createMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return MovieService.createMovie();
};
