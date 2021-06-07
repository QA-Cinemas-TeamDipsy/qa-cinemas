import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "../../App";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";

const MovieInfo = (props) => {
  const movies = useContext(MovieContext);
  const [movieInfo, setMovieInfo] = useState({});
  const { id } = useParams();

  console.log("movie", movies);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=1fac6c28&i=${id}`
      );
      setMovieInfo(data);
    }
    fetchData();
    console.log(id);
  }, []);
  console.log("movieInfo", movieInfo);
  return (
    <>
      {movieInfo && (
        <div
          style={{
            width: "60%",
            margin: "auto",
          }}
        >
          <h2>{movieInfo.Title}</h2>
          <img src={movieInfo.Poster} alt="" />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "centre",
              flexDirection: "column",
            }}
          >
            <h4 className="runtime">
              Genre: <span>{movieInfo.Genre}</span>
            </h4>

            <h4 style={{ margin: 8, marginLeft: 0, color: "#C82333" }}>
              Description
            </h4>
            <p style={{ marginLeft: 8 }}>{movieInfo.Plot}</p>
            <h4 className="runtime">
              Runtime: <span>{movieInfo.Runtime}</span>
            </h4>
            <h4 className="runtime">
              Actors: <span style={{ fontSize: 18 }}>{movieInfo.Actors}</span>
            </h4>
            <br />
            <h4 className="runtime">
              Film Rating <span>{movieInfo.Rating}</span>
              <h4 className="runtime">
                Film Awards <span>{movieInfo.Awards} </span>
              </h4>
            </h4>
          </div>
        </div>
      )}

      <Button variant="outline-danger">Book Tickets</Button>
    </>
  );
};

export default MovieInfo;
