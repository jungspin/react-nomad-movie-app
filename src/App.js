import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "./Movie";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #eff3f7;
  height: 100%;
`;

const StyledRootDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-gap: 100px;
  width: 80%;
  padding: 70px 50px 50px;
  float: left;
`;

function App() {
  // 변수 앞에 is 붙으면 보통 boolean 이잖아? 가끔 안먹을 때가 있음 (parsing). 그래서 테스트 해봐야돼
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // pending 이 끝나면 callback
    let movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);

    setMovies(movies.data.data.movies);
    setIsLoading(false);
  };

  // useEffect 는 component did mount 과 component did update 를 가진다
  // useEffect 비동기로 만들면 안돼
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <StyledSection>
      <StyledRootDiv>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
        <hr />
      </StyledRootDiv>
    </StyledSection>
  );
}

export default App;
