import React from "react";

const DetailPage = ({ location }) => {
  //console.log(location);
  const { movie } = location.state;
  return <div>상세보기 페이지 : {movie.title}</div>;
};

export default DetailPage;
