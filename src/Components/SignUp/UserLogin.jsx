import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import LoginForm from "./LoginForm.jsx";
import "./User.css";

import axios from "axios";

const UserLogin = (props) => {
  const { showModal, updateModalState, updateIsLoggedIn, updateUser } = props;

  const [userData, setUserData] = useState({});

  const handleClose = () => {
    updateModalState(false);
  };
  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/api/users/validate", userData)
      .then((res) => {
        console.log(res.data);
        updateUser(res.data);
        updateIsLoggedIn(true);
        localStorage.setItem("user", res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    updateModalState(false);
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        keyboard={false}
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm userObj={userData} updateUserObj={setUserData} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="formButton"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="secondary"
            className="formButton"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserLogin;
