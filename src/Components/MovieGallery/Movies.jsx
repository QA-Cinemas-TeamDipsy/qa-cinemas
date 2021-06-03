import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, Image, Row, Col, Button, Container } from "react-bootstrap";
import MovieList from "./MovieList";

const Movies = (props) => {
  // const [movies, setMovies] = useState([]);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [displayUpcoming, setDisplayUpcoming] = useState(false);
  const [displayCurrent, setDisplayCurrent] = useState(false);

  const [currentIsLoaded, setCurrentIsLoaded] = useState(false);
  const [futureIsLoaded, setFutureIsLoaded] = useState(false);
  const [err, setError] = useState({});

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

  const handleDisplayCurrent = () => {
    setDisplayCurrent(true);
    <h1>Whats on now</h1>;
    setDisplayUpcoming(false);
  };

  const handleDisplayUpcoming = () => {
    setDisplayCurrent(false);
    <h1>Coming Soon</h1>;
    setDisplayUpcoming(true);
  };

  return (
    <>
      <Button variant="secondary" onClick={handleDisplayCurrent}>
        {" "}
        Whats on{" "}
      </Button>
      <Button variant="secondary" onClick={handleDisplayUpcoming}>
        Coming Soon
      </Button>

      <h1>Book Now</h1>
      <MovieList
        movies={displayUpcoming ? upcomingMovies : currentMovies}
      ></MovieList>
    </>
  );
};

export default Movies;

{
  /* //   useEffect(() => {
//     const MOVIES_API_URL = "http://www.omdbapi.com/?apikey=1fac6c28&";
//     const MOVIE_ID = props.params.movieID;

//     fetch(`${MOVIES_API_URL}movie/${MOVIE_ID}&language=en-US`)
//       .then((response) => response.json())
//       .then((response) => {
//         // console.log(response);
//         setMovie(response);
//       });
//   }, []);

//   const MOVIES_API_URL = "http://www.omdbapi.com/?apikey=1fac6c28&";
//   const MOVIES = ["tt0110357", "tt0110475", "tt1457767"];

//   let movieRequests = MOVIES.map((movie) => {
//     return axios.get(`${MOVIES_API_URL}i=${movie}`);
//   });

//   Promise.all(movieRequests)
//     .then((responses) => {
//       console.log(responses);
//       setIsLoaded(true);
//       setMovies(responses.map((x) => x.data));
//     })
//     .catch((err) => {
//       console.error(err.message);
//       setIsLoaded(true);
//       setError(err);
//     }); */
}
