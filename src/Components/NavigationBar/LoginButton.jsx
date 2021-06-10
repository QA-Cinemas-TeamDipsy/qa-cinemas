import { Button } from "react-bootstrap";
import UserLogin from "../SignUp/UserLogin";
import { useState } from "react";

const LoginButton = (props) => {
  const { updateIsLoggedIn, updateUser } = props;
  const [showLogModal, setShowLogModal] = useState(false);
  const handleShowLogModal = () => {
    setShowLogModal(true);
  };

  return (
    <>
      <Button
        variant="danger"
        className="rounded-pill"
        style={{ borderColor: "#343A40", border: "10px" }}
        onClick={handleShowLogModal}
      >
        <img src="https://img.icons8.com/android/24/000000/login-rounded-right.png" alt="" />
        Login
      </Button>
      <UserLogin
        showModal={showLogModal}
        updateModalState={setShowLogModal}
        updateIsLoggedIn={updateIsLoggedIn}
        updateUser={updateUser}
      />
    </>
  );
};

export default LoginButton;
