import React from "react";
import { Image, Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MovieList.css";

const MovieList = (props) => {
  const { movies } = props;

  return (
    <>
      <Container>
        <br />
        <Row>
          {movies.map((movie, id) => (
            <>
              <Col sm={4} key={id} className="movie">
                <Link
                  to={{
                    pathname: `/movieinfo/${movie.imdbID}`,
                    state: { movie },
                  }}
                >
                  <Image className="posterImage-img" src={movie.poster} />
                </Link>

                <h3 style={{ margin: "10px 5px " }}>{movie.title}</h3>

                <Link
                  to={{
                    pathname: `/movieinfo/${movie.imdbID}`,
                    state: { movie },
                  }}
                >
                  <Button className="m-3" variant="outline-danger">
                    View Info
                  </Button>
                </Link>

                <Link
                  to={{
                    pathname: "/MovieTimes",
                    state: { movieTitle: movie.title, movieId: movie["_id"] },
                  }}
                >
                  <Button
                    variant="outline-danger"
                    disabled={movie.status.upcoming}
                  >
                    Go To Tickets
                  </Button>
                </Link>

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
