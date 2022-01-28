import React from "react";

import { Text, Title } from "../style";
import MovieRating from "./MovieRating";

function Movie() {
  return (
    <div>
      <Title>name</Title>
      <Text> description</Text>
      <MovieRating />
    </div>
  );
}

export default Movie;
