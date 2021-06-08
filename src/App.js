import HomePage from "./Components/HomePage";
import AboutPage from "./Components/About/AboutPage"
import NavigationBar from "./Components/NavigationBar/NavigationBar"
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from "./Components/Footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./App.css";
import Classifications from "./Components/Classifications/Classifications";
import BookTicketsBtn from "./Components/Booking/BookTicketsBtn";
import BookTickets from "./Components/Booking/BookTickets";
import MovieTimes from "./Components/Booking/MovieTimes";
import PaymentForm from "./Components/Booking/PaymentForm";

function App() {
  return (

    <Router>
      <NavigationBar />
      <br />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/BookTickets" component={BookTickets} />
        <Route path="/BookTicketsBtn" component={BookTicketsBtn} />
        <Route path="/Classifications" component={Classifications} />
        <Route path="/Payments" component={PaymentForm} />
        <Route path="/MovieTimes" component={MovieTimes} />
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>

      <br />
      <Footer />
    </Router>



  );
}

export default App;
