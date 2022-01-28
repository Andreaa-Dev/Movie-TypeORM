import React from "react";

import { Background, Title } from "../style";
import Movie from "./Movie";

function index() {
  return (
    <Background>
      <Title>Movie</Title>
      <Movie />
    </Background>
  );
}

export default index;
