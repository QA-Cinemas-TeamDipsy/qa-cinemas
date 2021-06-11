import React, { useState, createContext } from "react";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/About/AboutPage";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Movies from "./Components/MovieGallery/Movies";
import ContactUs from "./Components/ContactUs/ContactUs";
import Classifications from "./Components/Classifcations/Classifcations";
import MovieTimes from "./Components/Booking/MovieTimes";
import BookTickets from "./Components/Booking/BookTickets";
import PaymentForm from "./Components/Booking/PaymentForm";
import Footer from "./Components/Footer/Footer";
import Cinemas from "./Components/Cinema_Details/Cinemas"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Classifications from "./Components/Classifications/Classifications";
import BookTicketsBtn from "./Components/Booking/BookTicketsBtn";
import BookTickets from "./Components/Booking/BookTickets";
import MovieTimes from "./Components/Booking/MovieTimes";
import PaymentForm from "./Components/Booking/PaymentForm";

import MovieInfo from "./Components/MovieInfo/MovieInfo";
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

  return (
    <>
      <Router>
        <Route>
          <NavigationBar
            searchedMovie={searchedMovie}
            user={user}
            setUser={setUser}
          />
    <Router>
      <NavigationBar />
      <br />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/cinemas" component={Cinemas} />
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
          <Route exact path="/BookTickets" render={(props) => (
            <BookTickets {...props} />
          )}></Route>

          <Route exact path="/Payments"
          render={(props) => (
            <PaymentForm {...props} />
          )}></Route>

          <Route exact path="/about">
            <AboutPage />
          </Route>

          <Route exact path="/Classifications" component={Classifications}>
                <Classifications />
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
