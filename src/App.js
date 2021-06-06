import HomePage from "./Components/HomePage";
import AboutPage from "./Components/About/AboutPage";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Movies from "./Components/MovieGallery/Movies";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import DiscussionBoard from "./Components/DiscussionBoard/DiscussionBoard";

function App() {
  return (
    <Router>
      <NavigationBar />
      <br />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/ContactUs" component={ContactUs} />

        <Route exact path="/movies" component={Movies}></Route>

        <Route exact path="/about">
          <AboutPage />
        </Route>

        <Route exact path="/discuss-board">
          <DiscussionBoard />
        </Route>
      </Switch>
      <br />
      <Footer />
    </Router>
  );
}

export default App;
