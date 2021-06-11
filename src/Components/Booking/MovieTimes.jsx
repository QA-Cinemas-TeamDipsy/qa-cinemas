import { Col, Row, Button, Tab } from "react-bootstrap";

import { useState } from "react";
import Tabs from 'react-bootstrap/Tabs';
import { Link, NavLink } from 'react-router-dom';

const MovieTimes = (props) => {
  const movieTitle = props.location.state.movieTitle;
  let screeningTime = "16:00";
  console.log(props)

  const [key, setKey] = useState("monday");
  const [screeningDate, setScreeningDate] = useState("monday");


  const setDay = (k) => {
    setScreeningDate(k);
    setKey(k);
  };

  const zeroPad = (num, places) => String(num).padStart(places, "0");

  }
  
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
