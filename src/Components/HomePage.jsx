import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar/NavigationBar";
import Banner from "./Banner/Banner";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        const MOVIES_API_URL = "http://www.omdbapi.com/?apikey=1fac6c28&";
        const MOVIES = ["tt0110357", "tt0110475", "tt1457767"];

        let movieRequests = MOVIES.map((movie) => {
            return axios.get(`${MOVIES_API_URL}i=${movie}`);
        });

        Promise.all(movieRequests).then((responses) => {
            console.log(responses);
            setIsLoaded(true);
            setMovies(responses.map(x => x.data));
        }).catch((err) => {
            console.error(err.message);
            setIsLoaded(true);
            setError(err);
        })

    }, []);

    return (
        <>

            {/* Movie Hero Section */}
            <Banner movies={movies}/>

            {/* Movie Grid */}
            {/* <Movie /> */}
  

    
        </>

    )
};

export default HomePage;
