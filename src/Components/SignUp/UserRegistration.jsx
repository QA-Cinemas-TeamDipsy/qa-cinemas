import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import RegisterForm from "./RegisterForm.jsx";
import "./User.css";

const UserRegistration = (props) => {
  const { showModal, updateModalState } = props;

  const [userData, setUserData] = useState({});

  const handleClose = () => {
    updateModalState(false);
  };
  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/api/users/", userData)
      .then((res) => {
        console.log(res);
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
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterForm userObj={userData} updateUserObj={setUserData} />
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
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserRegistration;
