import { Form, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./User.css";

import axios from "axios";

const UserForm = (props) => {
  const { userObj, updateUserObj } = props;

  const [cinemaList, setCinemaList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/cinemas/getAllNames")
      .then((res) => {
        console.log(res.data);
        setIsLoaded(true);
        setCinemaList(res.data);
      })
      .catch((err) => {
        setIsLoaded(err);
        setError(err);
        setCinemaList(["No cinema"]);
      });
  }, []);

  const insert = (e) => {
    let newField = {};
    newField[e.target.id] = e.target.value;
    updateUserObj((prevData) => Object.assign(prevData, newField));
    console.log(userObj);
  };

  return (
    <>
      <Form>
        <Row>
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              id="firstName"
              onChange={insert}
            />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              id="lastName"
              onChange={insert}
              placeholder="Last name"
            />
          </Col>
        </Row>

        <Form.Group controlId="formEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            id="username"
            onChange={insert}
          />
        </Form.Group>

        <Form.Group controlId="formPickCinema">
          <Form.Label>Choose cinema</Form.Label>
          <Form.Control as="select" id="cinemaID" onChange={insert}>
            <option value=""> </option>
            {cinemaList.map((cinema) => (
              <option value={cinema._id}>{cinema.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            id="emailAddress"
            onChange={insert}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formConfirmEmail">
          <Form.Label>Confirm Email address</Form.Label>
          <Form.Control type="email" placeholder="Confirm email" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            id="password"
            onChange={insert}
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="ConfirmPassword" />
        </Form.Group>

        <Form.Group controlId="formPostcode">
          <Form.Label>Postcode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Postcode"
            id="postCode"
            onChange={insert}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default UserForm;
