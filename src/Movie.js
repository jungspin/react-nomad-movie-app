import React from "react";
import SubMovie from "./components/SubMovie";

// poster 키 값 없는데?
// id, title, summary, medium_cover_image, year
const Movie = ({ movie }) => {
  return <SubMovie movie={movie} />;
};

export default Movie;
