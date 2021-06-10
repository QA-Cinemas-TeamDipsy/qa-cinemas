import React, { useState, useEffect, createContext, useRef } from "react";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/About/AboutPage";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Movies from "./Components/MovieGallery/Movies";
import ContactUs from "./Components/ContactUs/ContactUs";
import MovieTimes from "./Components/Booking/MovieTimes";
import BookTickets from "./Components/Booking/BookTickets";
import PaymentForm from "./Components/Booking/PaymentForm";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import "./App.css";

import MovieInfo from "./Components/MovieInfo/MovieInfo";
import SearchedMovie from "./Components/SearchedMovie/SearchedMovie";
import DiscussionBoard from "./Components/DiscussionBoard/DiscussionBoard";


export const MovieContext = createContext();


const App = () => {
  const [user, setUser] = useState({});
  const [currentMovies, setCurrentMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const [currentIsLoaded, setCurrentIsLoaded] = useState(false);
  const [futureIsLoaded, setFutureIsLoaded] = useState(false);
  const [err, setError] = useState({});

  const [searchedMovie, setSearchedMovie] = useState({});

  // // console.log("movie", searchedMovie);
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   console.log(Object.entries(loggedInUser));
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, []);

  return (
    <>
      <Router>
        <Route>
          <NavigationBar
            searchedMovie={searchedMovie}
            user={user}
            setUser={setUser}
          />
        </Route>

        <br />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/ContactUs" component={ContactUs} />

          <Route exact path="/movies">
            <Movies
              currentMovies={currentMovies}
              upcomingMovies={upcomingMovies}
            />
          </Route>
          <Route exact path="/movieinfo/:id" component={MovieInfo}></Route>
          <Route
            exact
            path="/MovieTimes"
            render={(props) => (
              <MovieTimes {...props} cinemaId={user.cinemaID} />
            )}
          ></Route>
          <Route exact path="/BookTickets">
            <BookTickets />
          </Route>
          <Route exact path="/Payments">
            <PaymentForm />
          </Route>

          <Route exact path="/about">
            <AboutPage />
          </Route>

          <Route exact path="/DiscussionBoard">
            <DiscussionBoard />
          </Route>
        </Switch>
        <br />
        <Footer />
      </Router>
    </>
  );
};

export default App;
