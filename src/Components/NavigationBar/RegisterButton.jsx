import { Button } from "react-bootstrap";
import UserRegistration from "../SignUp/UserRegistration";
import { useState } from "react";

const RegisterButton = () => {
  const [showRegModal, setShowRegModal] = useState(false);
  const handleShowRegModal = () => {
    setShowRegModal(true);
  };

  return (
    <>
      <Button
        variant="danger"
        className="rounded-pill"
        style={{ borderColor: "#343A40", border: "10pt" }}
        onClick={handleShowRegModal}
      >
        <img src="https://img.icons8.com/small/32/000000/user.png" alt="" />
        Sign Up
      </Button>
      <UserRegistration
        showModal={showRegModal}
        updateModalState={setShowRegModal}
      />
    </>
  );
};

export default RegisterButton;
