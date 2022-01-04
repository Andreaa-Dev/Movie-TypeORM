import { Movie } from "../entity/Movie";

const createMovie = async (movie: Movie): Promise<Movie> => {
  return Movie.create(movie).save();
};

export default { createMovie };
