import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    let movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
    setMovies(movies.data.data.movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
    // 1
    // 2
    // 3
  }, []);

  return (
    <GridBox>
      {isLoading
        ? "Loading..."
        : movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
    </GridBox>
  );
};

export default MoviesPage;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;
