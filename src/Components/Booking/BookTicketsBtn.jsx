import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookTicketsBtn = () => {
  let movieTitle = "passed from BookTicketsBtn";

  return (
    <Link
      to={{
        pathname: "/MovieTimes",
        state: { movieTitle },
      }}
    >
      <Button variant="outline-danger">Go To Tickets</Button>
    </Link>
  );
};
export default BookTicketsBtn;
