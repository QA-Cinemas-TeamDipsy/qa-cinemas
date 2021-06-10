import { Carousel, Image, Row, Col, Button, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Banner.css";

const Banner = (props) => {

  const [movies, setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/movies/getAllFeatured")
      .then((res) => {
        setIsLoaded(true);
        setMovies(res.data);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      });
  }, []);
  console.log(movies);

  return (
    <Carousel>
      {movies.map((movie) => (
        <Carousel.Item>
          <Container>
            <Row>
              <Col sm>
                <Image src={movie.poster} />
              </Col>

              <Col sm>
                <Carousel.Caption id="caption">
                  <h3>{movie.title}</h3>
                  <br />
                  <p>{movie.plot}</p>
                </Carousel.Caption>
              </Col>
              <Col className="align-items-center">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Row className="justify-content-center">
                  <Link
                    to={{
                      pathname: `/movieinfo/${movie.imdbID}`,
                      state: { movie },
                    }}
                  >
                    <Button variant="outline-danger">View Info</Button>
                  </Link>
                </Row>
                <br />
                <Row className="justify-content-center ">
                  <Link
                    to={{
                      pathname: "/MovieTimes",
                      state: { movieTitle: movie.title, movieId: movie["_id"] },
                    }}
                  >
                    <Button
                      variant="outline-danger"
                      disabled={true}
                    >
                      Go To Tickets
                    </Button>
                  </Link>
                </Row>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
