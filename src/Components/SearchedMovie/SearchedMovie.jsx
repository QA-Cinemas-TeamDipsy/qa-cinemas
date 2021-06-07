import React from "react";
import { Image, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchedMovie = ({ searchedMovie }) => {
  return (
    <div className="container" style={{ marginTop: 30 }}>
      <h4 style={{ margin: "20px 10px" }}>Search Result:</h4>
      <Col sm={4} className="movie">
        <Image className="posterImage-img" src={searchedMovie.Poster} />
        <h3 style={{ margin: "10px 5px " }}>{searchedMovie.Title}</h3>
        <Link to={`/movieinfo/${searchedMovie.imdbID}`}>
          <Button
            className="m-3"
            variant="outline-danger"
            movieData={searchedMovie}
          >
            View Info
          </Button>
        </Link>

        <Button variant="outline-danger" href="{}">
          Book Ticket
        </Button>

        <br />
        <br />
      </Col>
    </div>
  );
};

export default SearchedMovie;
