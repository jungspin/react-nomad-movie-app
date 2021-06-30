import React from "react";
import styled from "styled-components";

const SubMovie = ({ movie }) => {
  return (
    <StyledDiv>
      <StyledA href="">
        <StyledImg alt="a" src={movie.medium_cover_image} />
        <StyledDivData>
          <StyledDivTitle>{movie.title}</StyledDivTitle>
          <StyledDivYear>{movie.year}</StyledDivYear>
          <StyledDivGenres>
            {movie.genres.map((genre) => (
              <StyledLi>{genre}</StyledLi>
            ))}
          </StyledDivGenres>
          <p>{movie.summary.slice(0, 180)}...</p>
        </StyledDivData>
      </StyledA>
    </StyledDiv>
  );
};

export default SubMovie;

const StyledDiv = styled.div`
  background-color: white;
  margin-bottom: 70px;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const StyledA = styled.a`
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 2fr;
  grid-gap: 20px;
  text-decoration: none;
  color: inherit;
`;

const StyledImg = styled.img`
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;

const StyledDivData = styled.div`
  display: block;
`;

const StyledDivYear = styled.div`
  margin: 0;
  font-weight: 300;
`;

const StyledDivTitle = styled.div`
  margin-bottom: 5px;
  font-size: 24px;
  color: #2c2c2c;
`;

const StyledDivGenres = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;
`;

const StyledLi = styled.li`
  margin-right: 10px;
  font-size: 14px;
`;
