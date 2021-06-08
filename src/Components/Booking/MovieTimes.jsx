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
  }
  
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setDay(k)}
      className="mb-3"
    >
      <Tab eventKey="monday" title="Monday">
        <Link
          to={{
            pathname: "/BookTickets",
            state: { screeningDate, screeningTime, movieTitle }
          }}>
          <Button variant="outline-danger">{screeningTime}</Button>
        </Link>
      </Tab>
      <Tab eventKey="tuesday" title="Tuesday">
      <Link
          to={{
            pathname: "/BookTickets",
            state: { screeningDate, screeningTime, movieTitle }
          }}>
          <Button variant="outline-danger">{screeningTime}</Button>
        </Link>
      </Tab>
      <Tab eventKey="wednesday" title="Wednesday">
      <Link
          to={{
            pathname: "/BookTickets",
            state: { screeningDate, screeningTime, movieTitle }
          }}>
          <Button variant="outline-danger">{screeningTime}</Button>
        </Link>
      </Tab>
      <Tab eventKey="thursday" title="Thursday">
      <Link
          to={{
            pathname: "/BookTickets",
            state: { screeningDate, screeningTime, movieTitle }
          }}>
          <Button variant="outline-danger">{screeningTime}</Button>
        </Link>
      </Tab>
      <Tab eventKey="friday" title="Friday">
      <Link
          to={{
            pathname: "/BookTickets",
            state: { screeningDate, screeningTime, movieTitle }
          }}>
          <Button variant="outline-danger">{screeningTime}</Button>
        </Link>
      </Tab>
      <Tab eventKey="saturday" title="Saturday">
      <Link
          to={{
            pathname: "/BookTickets",
            state: { screeningDate, screeningTime, movieTitle }
          }}>
          <Button variant="outline-danger">{screeningTime}</Button>
        </Link>
      </Tab>
      <Tab eventKey="sunday" title="Sunday">
      <Link
          to={{
            pathname: "/BookTickets",
            state: { screeningDate, screeningTime, movieTitle }
          }}>
          <Button variant="outline-danger">{screeningTime}</Button>
        </Link>
      </Tab>
    </Tabs >
  );
};
export default MovieTimes;
