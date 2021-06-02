import HomePage from "./Components/HomePage";
import AboutPage from "./Components/About/AboutPage"
import NavigationBar from "./Components/NavigationBar/NavigationBar"
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from "./Components/Footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./App.css";

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
