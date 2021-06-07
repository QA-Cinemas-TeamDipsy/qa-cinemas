import { Col, Row, Button, Tab } from "react-bootstrap";
import { useState } from "react";
import Tabs from 'react-bootstrap/Tabs';
import { Link, NavLink } from 'react-router-dom';

const MovieTimes = () => {
    let movieTitle = "abc";
    let screeningTime = "16:00";

    const [key, setKey] = useState("monday");
    const [screeningDate, setScreeningDate] = useState("monday");

    const setDay = (k) => {
        setKey(k);
        setScreeningDate(k);
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
          to="/BookTickets"
          props={(screeningDate, screeningTime, movieTitle)}
        >
          <Button variant="outline-danger">{screeningTime}</Button>
        </Link>
      </Tab>
      <Tab eventKey="tuesday" title="Tuesday"></Tab>
      <Link
          to="/BookTickets"
          props={(screeningDate, screeningTime, movieTitle)}
        >
          <Button variant="outline-danger">{screeningTime}</Button>
        </Link>
      <Tab eventKey="wednesday" title="Wednesday"></Tab>
      <Link
          to="/BookTickets"
          props={(screeningDate, screeningTime, movieTitle)}
        >
          <Button variant="outline-danger">{screeningTime}</Button>
        </Link>
      <Tab eventKey="thursday" title="Thursday"></Tab>
      <Link
          to="/BookTickets"
          props={(screeningDate, screeningTime, movieTitle)}
        >
          <Button variant="outline-danger">{screeningTime}</Button>
        </Link>
      <Tab eventKey="friday" title="Friday"></Tab>
      <Link
          to="/BookTickets"
          props={(screeningDate, screeningTime, movieTitle)}
        >
          <Button variant="outline-danger">{screeningTime}</Button>
        </Link>
      <Tab eventKey="saturday" title="Saturday"></Tab>
      <Link
          to="/BookTickets"
          props={(screeningDate, screeningTime, movieTitle)}
        >
          <Button variant="outline-danger">{screeningTime}</Button>
        </Link>
      <Tab eventKey="sunday" title="Sunday"></Tab>
      <Link
          to="/BookTickets"
          props={(screeningDate, screeningTime, movieTitle)}
        >
          <Button variant="outline-danger">{screeningTime}</Button>
        </Link>
    </Tabs >
  );
};
export default MovieTimes;
