import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import MovieList from "./MovieList";
import "./Movies.css";

const Movies = ({ upcomingMovies, currentMovies }) => {
  return (
    <>
      <Tabs defaultActiveKey="current" id="uncontrolled-tab-example">
        <Tab eventKey="current" title="Current Movies">
          <MovieList movies={currentMovies} />
        </Tab>
        <Tab eventKey="upcoming" title="Upcoming Movies">
          <MovieList movies={upcomingMovies} />
        </Tab>
      </Tabs>
    </>
  );
};

export default Movies;
