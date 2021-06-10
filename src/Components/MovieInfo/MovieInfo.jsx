import React, { useState, useEffect } from "react";
import { Button, Container, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

import axios from "axios";

const MovieInfo = (props) => {
  const movie = props.location.state.movie;
  console.log(movie);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cinemaList, setCinemaList] = useState([]);
  const [error, setError] = useState(false);

  const [currentCinema, setCurrentCinema] = useState("Cinema");

  const handleCinemaChange = (e) => {
    console.log(e.target.value);
    setCurrentCinema(e.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/cinemas/getAllNames")
      .then((res) => {
        console.log(res.data);
        setIsLoaded(true);
        setCinemaList(res.data);
      })
      .catch((err) => {
        setIsLoaded(err);
        setError(err);
        setCinemaList(["No cinema"]);
      });
  }, []);

  return (
    <>
      <Container>
        {
          <div
            style={{
              width: "60%",
              margin: "auto",
            }}
          >
            <h2>{movie.title}</h2>
            <img src={movie.poster} alt="" />
            <br />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "centre",
                flexDirection: "column",
              }}
            >
              <h4 className="runtime">
                Genre: <span>{movie.genres.join(", ")}</span>
              </h4>

              <h4 style={{ margin: 8, marginLeft: 0, color: "#C82333" }}>
                Description
              </h4>
              <p style={{ marginLeft: 8 }}>{movie.plot}</p>
              <h4 className="runtime">
                Runtime: <span>{movie.runtime}</span>
              </h4>
              <h4 className="runtime">
                Actors:{" "}
                <span style={{ fontSize: 18 }}>{movie.actors.join(", ")}</span>
              </h4>
              <br />
              <h4 className="runtime">
                Film Rating <span>{movie.imdbRating}/10</span>
                <h4 className="runtime">
                  Film Awards <span>{movie.awards} </span>
                </h4>
              </h4>
              <br />

              <Link
                to={{
                  pathname: "/MovieTimes",
                  state: { movieTitle: movie.title, movieId: movie["_id"] },
                }}
              >
                <Button variant="outline-danger">Look at times</Button>
              </Link>
              <br />
              <DropdownButton
                id="dropdown-cinemalist-button"
                title={currentCinema}

              >
                {cinemaList.map((cinema) => (
                  <Dropdown.Item
                    as="button"
                    onClick={handleCinemaChange}
                    value={cinema.name}
                  >
                    {cinema.name}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
              <br />

              <h6>See what people are saying about {movie.title} </h6>

              <Button variant="outline-danger" href="/discussionboard">
                Discussion Board
              </Button>
            </div>
          </div>
        }
      </Container>
    </>
  );
};

export default MovieInfo;
