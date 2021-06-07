import React, { useState, useEffect, createContext, useRef } from "react";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/About/AboutPage";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Movies from "./Components/MovieGallery/Movies";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import "./App.css";
import MovieInfo from "./Components/MovieInfo/MovieInfo";
import SearchedMovie from "./Components/SearchedMovie/SearchedMovie";

export const MovieContext = createContext();

function App() {
  const [currentMovies, setCurrentMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const [currentIsLoaded, setCurrentIsLoaded] = useState(false);
  const [futureIsLoaded, setFutureIsLoaded] = useState(false);
  const [err, setError] = useState({});
  const [searchedMovie, setSearchedMovie] = useState({});

  useEffect(() => {
    const MOVIES_API_URL = "http://www.omdbapi.com/?apikey=1fac6c28&";
    const CURRENT_MOVIES = [
      "tt7069210",
      "tt8332922",
      "tt3228774",
      "tt5034838",
      "tt5109280",
      "tt10342730",
      "tt9419056",
      "tt3215824",
      "tt7888964",
    ];
    const FUTURE_MOVIES = [
      "tt3480822",
      "tt5433138",
      "tt0870154",
      "tt8385148",
      "tt3554046",
      "tt9848626",
    ];

    let currentMovieRequests = CURRENT_MOVIES.map((movie) => {
      return axios.get(`${MOVIES_API_URL}i=${movie}`);
    });

    let upcomingMovieRequests = FUTURE_MOVIES.map((movie) => {
      return axios.get(`${MOVIES_API_URL}i=${movie}`);
    });

    Promise.all(currentMovieRequests)
      .then((responses) => {
        // console.log(responses);
        setCurrentIsLoaded(true);
        setCurrentMovies(responses.map((x) => x.data));
      })
      .catch((err) => {
        console.error(err.message);
        setCurrentIsLoaded(true);
        setError(err);
      });

    Promise.all(upcomingMovieRequests)
      .then((responses) => {
        // console.log(responses);
        setFutureIsLoaded(true);
        setUpcomingMovies(responses.map((x) => x.data));
      })
      .catch((err) => {
        console.error(err.message);
        setFutureIsLoaded(true);
        setError(err);
      });
  }, []);
  console.log("movie", searchedMovie);
  return (
    <>
      {currentMovies.length > 0 && upcomingMovies.length > 0 && (
        <MovieContext.Provider value={[...currentMovies, ...upcomingMovies]}>
          <Router>
            <NavigationBar setSearchedMovie={setSearchedMovie} />
            <br />
            <Switch>
              <Route exact path="/">
                <HomePage />
                {searchedMovie && (
                  <SearchedMovie searchedMovie={searchedMovie} />
                )}
              </Route>

              <Route exact path="/ContactUs" component={ContactUs}></Route>

              <Route exact path="/movies">
                <Movies
                  currentMovies={currentMovies}
                  upcomingMovies={upcomingMovies}
                />
              </Route>
              <Route exact path="/movieinfo/:id" component={MovieInfo}></Route>

              <Route exact path="/about">
                <AboutPage />
              </Route>
            </Switch>
            <br />
            <Footer />
          </Router>
        </MovieContext.Provider>
      )}
    </>
  );
}

export default App;
