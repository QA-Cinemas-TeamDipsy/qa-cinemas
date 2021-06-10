import { Button } from "react-bootstrap";

const LogoutButton = (props) => {
  const { updateIsLoggedIn } = props;

  const handleLogOut = () => {
    updateIsLoggedIn(false);
  };
  return (
    <>
      <Button
        variant="danger"
        className="rounded-pill"
        style={{ borderColor: "#343A40", border: "10pt" }}
        onClick={handleLogOut}
      >
        <img src="https://img.icons8.com/small/32/000000/user.png" alt="" />
        Log out
      </Button>
    </>
  );
};

export default LogoutButton;
