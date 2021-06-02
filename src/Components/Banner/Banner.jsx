import { Carousel, Image, Row, Col, Button, Container } from 'react-bootstrap';
import "./Banner.css";

const Banner = (props) => {

    const { movies } = props;

    return (
        <Carousel>
            {
                movies.map((movie) => (
                    <Carousel.Item>
                        <Container>
                            <Row>
                                <Col sm>
                                    <Image src={movie.Poster} />
                                </Col>
                                <Col sm >
                                    <Carousel.Caption id="caption" >
                                        <h3>{movie.Title}</h3>
                                        <br />
                                        <p>{movie.Plot}</p>
                                    </Carousel.Caption>

                                </Col>
                                <Col className="align-items-center">
                                <br/><br/><br/><br/><br/><br/><br/>
                                    <Row className="justify-content-center">
                                        <Button variant="outline-danger" >
                                            View Info
                                        </Button>
                                    </Row>
                                    <br/>
                                    <Row className="justify-content-center ">
                                        <Button variant="outline-danger" >
                                            Book Tickets
                                        </Button>
                                    </Row>

                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>

                ))
            }
        </Carousel >
    )

}

export default Banner;