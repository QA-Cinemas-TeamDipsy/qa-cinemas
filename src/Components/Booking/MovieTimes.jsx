import { Col, Row, Button, Tab } from "react-bootstrap";

import { useState, useEffect } from "react";
import { Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";

import axios from "axios";

import "./MovieTimes.css";

const MovieTimes = (props) => {

  const movieTitle = props.location.state.movieTitle;

  const movieId = "60bf35500f9ee20abb34cac0";
  const cinemaId = "60bf7180f4cde119e64a1d46";
  const [key, setKey] = useState("Monday");
  const [screeningDate, setScreeningDate] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [viewingTimes, setViewingTimes] = useState({});

  console.log(movieTitle);
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/viewingTimes/findViewingTimes?cinema_id=${cinemaId}&movie_id=${movieId}`
      )
      .then((res) => {
        console.log(res.data);
        setIsLoaded(true);
        setViewingTimes(res.data.viewing_times);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      });
  }, []);

  const setDay = (k) => {
    setScreeningDate(k);
    setKey(k);
  };

  const zeroPad = (num, places) => String(num).padStart(places, "0");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setDay(k)}
      className="mb-3"
    >
      {Object.entries(viewingTimes).map(([key, value]) => (
        <Tab eventKey={key} title={key}>
          <h3>Available Times</h3>
          <br />
          <Row>
            {value.map((screeningTime) => (
              <Col className="viewingTimes">
                <Link
                  to={{
                    pathname: "/BookTickets",
                    state: { movieTitle, screeningTime, screeningDate },
                  }}
                >
                  <Button variant="outline-danger">
                    {`${screeningTime.hours}:${zeroPad(
                      screeningTime.minutes,
                      2
                    )}`}
                  </Button>
                </Link>
              </Col>
            ))}
          </Row>
        </Tab>
      ))}
    </Tabs>
  );
};
export default MovieTimes;
