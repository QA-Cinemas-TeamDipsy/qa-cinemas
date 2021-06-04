import React, { useState } from "react";
import { Carousel, Image, Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MovieList.css";

const MovieList = (props) => {
  const { movies, upComing } = props;
  // const { movie, setMovie } = useState({});
  movies.map((a) => {
    console.log(a);
  });

  return (
    <>
      <Container>
        <br />
        <br />
        <Row>
          {movies.map((movie, id) => (
            <>
              <Col sm={4} key={id} className="movie">
                <Image className="posterImage-img" src={movie.Poster} />
                <h3 style={{ margin: "10px 5px " }}>{movie.Title}</h3>
                <a href={`movieinfo?${movie.imdbID}`}>
                  <Button
                    className="m-3"
                    variant="outline-danger"
                    movieData={movie}
                  >
                    View Info
                  </Button>
                </a>

                <Button disabled={upComing} variant="outline-danger" href="{}">
                  Book Ticket
                </Button>

                <br />
                <br />
              </Col>
            </>
          ))}
        </Row>
      </Container>
      {/* {movie && history.push({ pathname: "/movies/info", state: { ...movie } })} */}
    </>
  );
};

export default MovieList;
