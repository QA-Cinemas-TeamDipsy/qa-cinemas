import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import MovieList from "./MovieList";
import "./Movies.css";

import axios from "axios";

const Movies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let movieRequests = [
      axios.get("http://localhost:8080/api/movies/getAllCurrent"),
      axios.get("http://localhost:8080/api/movies/getAllUpcoming"),
    ];

    Promise.all(movieRequests)
      .then((responses) => {
        console.log(responses);
        setIsLoaded(true);
        setCurrentMovies(responses[0].data);
        setUpcomingMovies(responses[1].data);
      })
      .catch((err) => {
        console.error(err.message);
        setIsLoaded(true);
        setError(err);
      });
  }, []);

  return (
    <>
      <Tabs defaultActiveKey="current" id="uncontrolled-tab-example">
        <Tab eventKey="current" title="Current Movies">
          <br />
          <MovieList movies={currentMovies} />
        </Tab>
        <Tab eventKey="upcoming" title="Upcoming Movies">
          <br />
          <MovieList movies={upcomingMovies} />
        </Tab>
      </Tabs>
    </>
  );
};

export default Movies;
