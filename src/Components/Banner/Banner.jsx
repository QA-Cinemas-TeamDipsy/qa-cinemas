import { Carousel, Image } from 'react-bootstrap';
import "./Banner.css";

const Banner = (props) => {

    const { movies } = props;

    return (
        <Carousel>
            {
                movies.map((movie) => (
                    <Carousel.Item>
                        <Image src={movie.Poster} className="centreImage"></Image>
                        <Carousel.Caption>
                            <h3>{movie.Title}</h3>
                            <p>{movie.Plot}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )

}

export default Banner;