import React, { useState } from "react";
import Rating from "@mui/material/Rating";

function MovieRating() {
  const [value, setValue] = useState<number | null>(2);
  return (
    <div>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
}

export default MovieRating;
