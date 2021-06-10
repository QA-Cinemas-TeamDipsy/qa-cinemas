import { Form } from "react-bootstrap";
import "./User.css";

const LoginForm = (props) => {
  const { userObj, updateUserObj } = props;

  const insert = (e) => {
    let newField = {};
    newField[e.target.id] = e.target.value;
    updateUserObj((prevData) => Object.assign(prevData, newField));
    console.log(userObj);
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Username/Email Address</Form.Label>
          <Form.Control
            type="text"
            id="loginName"
            placeholder="Username/Email Address"
            onChange={insert}
            autocomplete={false}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            placeholder="Password"
            onChange={insert}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default LoginForm;
