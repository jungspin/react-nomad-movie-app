import axios from "axios";
import React, { useEffect, useState } from "react";

const DetailPage = ({ location }) => {
  //console.log(location);
  const { id } = location.state.movie;
  //console.log("id: " + id);
  const [details, setDetails] = useState([]);

  const getDetails = async () => {
    let detail = await axios.get(
      `https://yts-proxy.now.sh/movie_details.json?movie_id=${id}`,
    );
    //console.log(detail.data.data.movie);

    //console.log(movie);
    setDetails(detail.data.data.movie);
  };

  useEffect(() => {
    getDetails();
    // 1
    // 2
    // 3
  }, []);

  return (
    <div>
      <h1>{details.title}</h1>
      <div>
        <img src={details.medium_cover_image} alt="" />
        <p>{details.description_full}</p>
      </div>
    </div>
  );
};

export default DetailPage;
