import React, { useState, Image, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import axios from "axios";

const MovieInfo = (props) => {
  // const [movies] = useContext();
  // const { movies } = props;

  const { movieData } = props;
  // console.log("movie", movies);

  return (
    <>
      {/* {currentMovies.length > 0 && (
        <div style={{ width: "60%", margin: "auto" }}>
          <h2>{currentMovies[id].Title}</h2>
          <img src={currentMovies[id].Poster} alt="" />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "centre",
              flexDirection: "column",
            }}
          >
            <h4 className="runtime">
              Genre: <span>{currentMovies[id].Genre}</span>
            </h4>

            <h4 style={{ margin: 8, marginLeft: 0, color: "#C82333" }}>
              Description
            </h4>
            <p style={{ marginLeft: 8 }}>{currentMovies[id].Plot}</p>
            <h4 className="runtime">
              Runtime: <span>{currentMovies[id].Runtime}</span>
            </h4>
            <h4 className="runtime">
              Actors:{" "}
              <span style={{ fontSize: 18 }}>{currentMovies[id].Actors}</span>
            </h4>
            <br />
            <h4 className="runtime">
              Film Rating <span>{currentMovies[id].Rating}</span>
              <h4 className="runtime">
                Film Awards <span>{currentMovies[id].Awards} </span>
              </h4>
            </h4>
          </div>
        </div>
      )} */}

      <div style={{ width: "60%", margin: "auto" }}>
        <h2>{movieData.Title}</h2>
        <img src={movieData.Poster} alt="" />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "centre",
            flexDirection: "column",
          }}
        >
          <h4 className="runtime">
            Genre: <span>{movieData.Genre}</span>
          </h4>

          <h4 style={{ margin: 8, marginLeft: 0, color: "#C82333" }}>
            Description
          </h4>
          <p style={{ marginLeft: 8 }}>{movieData.Plot}</p>
          <h4 className="runtime">
            Runtime: <span>{movieData.Runtime}</span>
          </h4>
          <h4 className="runtime">
            Actors: <span style={{ fontSize: 18 }}>{movieData.Actors}</span>
          </h4>
          <br />
          <h4 className="runtime">
            Film Rating <span>{movieData.Rating}</span>
            <h4 className="runtime">
              Film Awards <span>{movieData.Awards} </span>
            </h4>
          </h4>
        </div>
      </div>

      <Button variant="outline-danger">Book Tickets</Button>
    </>
  );
};

export default MovieInfo;
