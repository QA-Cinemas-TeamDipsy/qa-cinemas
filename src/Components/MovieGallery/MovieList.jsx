import { Carousel, Image, Row, Col, Button, Container } from "react-bootstrap";

const MovieList = (props) => {
  const { movies } = props;

  return (
    <>
      {movies.map((movie, id) => (
        <Container>
          <Row>
            <Col sm>
              <Image src={movie.Poster} />
            </Col>
            <Col sm>
              <Carousel.Caption id="caption">
                <h3>{movie.Title}</h3>
                <br /> <br />
                <br /> <br />
                <br /> <br />
                <br />
              </Carousel.Caption>
            </Col>
            <Col className="align-items-center">
              <br /> <br />
              <br /> <br />
              <br /> <br />
              <br />
              <Row className="justify-content-center">
                <Button variant="outline-danger" href="{}">
                  View Info
                </Button>
              </Row>
              <br />
              <Row className="justify-content-center ">
                <Button variant="outline-danger">Book Tickets</Button>
              </Row>
            </Col>
          </Row>
        </Container>
      ))}
    </>
  );
};

export default MovieList;
