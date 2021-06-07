import React from "react";
import { Image, Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MovieList.css";

const MovieList = (props) => {
  const { movies, upComing } = props;

  return (
    <>
      <Container>
        <br />
        <Row>
          {movies.map((movie, id) => (
            <>
              <Col sm={4} key={id} className="movie">
                <Image className="posterImage-img" src={movie.Poster} />
                <h3 style={{ margin: "10px 5px " }}>{movie.Title}</h3>
                <Link to={`/movieinfo/${movie.imdbID}`}>
                  <Button
                    className="m-3"
                    variant="outline-danger"
                    movieData={movie}
                  >
                    View Info
                  </Button>
                </Link>

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
    </>
  );
};

export default MovieList;
