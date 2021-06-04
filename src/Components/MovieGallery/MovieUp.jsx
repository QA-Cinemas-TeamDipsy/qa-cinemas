import React, { useState, Image, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";

const MovieUp = (props) => {
  // const [movies] = useContext();
  // const { movies } = props;
  const [movie, setMovie] = useState([]);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [displayUpcoming, setDisplayUpcoming] = useState(false);
  const [displayCurrent, setDisplayCurrent] = useState(false);

  const [currentIsLoaded, setCurrentIsLoaded] = useState(false);
  const [futureIsLoaded, setFutureIsLoaded] = useState(false);
  const [err, setError] = useState({});
  const [allMovies, setAllMovies] = useState([]);
  const { id } = useParams();
  // console.log("movie", movies);
  useEffect(() => {
    const MOVIES_API_URL = "http://www.omdbapi.com/?apikey=1fac6c28&";
    const CURRENT_MOVIES = [
      "tt7069210",
      "tt8332922",
      "tt3228774",
      "tt5034838",
      "tt5109280",
      "tt10342730",
      "tt9419056",
      "tt3215824",
      "tt7888964",
    ];
    const FUTURE_MOVIES = [
      "tt3480822",
      "tt5433138",
      "tt0870154",
      "tt8385148",
      "tt3554046",
      "tt9848626",
    ];

    let currentMovieRequests = CURRENT_MOVIES.map((movie) => {
      return axios.get(`${MOVIES_API_URL}i=${movie}`);
    });

    let upcomingMovieRequests = FUTURE_MOVIES.map((movie) => {
      return axios.get(`${MOVIES_API_URL}i=${movie}`);
    });

    Promise.all(currentMovieRequests)
      .then((responses) => {
        console.log(responses);
        setCurrentIsLoaded(true);
        setCurrentMovies(responses.map((x) => x.data));
      })
      .catch((err) => {
        console.error(err.message);
        setCurrentIsLoaded(true);
        setError(err);
      });

    Promise.all(upcomingMovieRequests)
      .then((responses) => {
        console.log(responses);
        setFutureIsLoaded(true);
        setUpcomingMovies(responses.map((x) => x.data));
      })
      .catch((err) => {
        console.error(err.message);
        setFutureIsLoaded(true);
        setError(err);
      });
  }, []);

  useEffect(() => {
    if (currentMovies.length > 0 && upcomingMovies.length > 0) {
      setAllMovies([...currentMovies, ...upcomingMovies]);
      console.log("here");
    }
  }, []);

  allMovies.length > 0 && console.log(allMovies);

  return (
    <>
      {upcomingMovies.length > 0 && (
        <div style={{ width: "60%", margin: "auto" }}>
          <h2>{upcomingMovies[id].Title}</h2>
          <img
            className="posterImage-img"
            src={upcomingMovies[id].Poster}
            alt=""
          />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "centre",
              flexDirection: "column",
            }}
          >
            <Button
              style={{ width: "fit-content" }}
              className="mt-4"
              variant="outline-warning"
            >
              {upcomingMovies[id].Genre}
            </Button>
            <h4 style={{ margin: 8, color: "#C82333" }}>Description</h4>
            <p>{upcomingMovies[id].Plot}</p>
            <h4 className="runtime">
              Runtime: <span>{upcomingMovies[id].Runtime}</span>
            </h4>
            <h4 className="runtime">
              Actors:{" "}
              <span style={{ fontSize: 18 }}>{upcomingMovies[id].Actors}</span>
            </h4>
            <br />
            <h4 className="runtime">
              Film Rating:{" "}
              <span>
                {upcomingMovies[id].Rating}| Film Awards:
                {upcomingMovies[id].Awards}{" "}
              </span>
            </h4>
          </div>
        </div>
      )}
      <Button variant="outline-danger">Book Tickets</Button>
    </>
  );
};

export default MovieUp;
