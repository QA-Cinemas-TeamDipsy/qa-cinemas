import { useState } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  Row,
  Container,
  Alert,
  Button,
} from "react-bootstrap";

import "./Seating.css";

const Seating = ({ totalTickets }) => {
  const [error, setError] = useState(false);
  const [value, setValue] = useState([]);
  const seatsA = [
    { id: 1, row: "A", number: 1, isSelected: false },
    { id: 2, row: "A", number: 2, isSelected: false },
    { id: 3, row: "A", number: 3, isSelected: false },
    { id: 4, row: "A", number: 4, isSelected: false },
    { id: 5, row: "A", number: 5, isSelected: false },
    { id: 6, row: "A", number: 6, isSelected: false },
    { id: 7, row: "A", number: 7, isSelected: false },
  ];
  const seatsB = [
    { id: 8, row: "B", number: 1, isSelected: false },
    { id: 9, row: "B", number: 2, isSelected: false },
    { id: 10, row: "B", number: 3, isSelected: false },
    { id: 11, row: "B", number: 4, isSelected: false },
    { id: 12, row: "B", number: 5, isSelected: false },
    { id: 13, row: "B", number: 6, isSelected: false },
    { id: 14, row: "B", number: 7, isSelected: false },
  ];
  const seatsC = [
    { id: 15, row: "C", number: 1, isSelected: false },
    { id: 16, row: "C", number: 2, isSelected: false },
    { id: 17, row: "C", number: 3, isSelected: false },
    { id: 18, row: "C", number: 4, isSelected: false },
    { id: 19, row: "C", number: 5, isSelected: false },
    { id: 20, row: "C", number: 6, isSelected: false },
    { id: 21, row: "C", number: 7, isSelected: false },
  ];
  const seatsD = [
    { id: 22, row: "D", number: 1, isSelected: false },
    { id: 23, row: "D", number: 2, isSelected: false },
    { id: 24, row: "D", number: 3, isSelected: false },
    { id: 25, row: "D", number: 4, isSelected: false },
    { id: 26, row: "D", number: 5, isSelected: false },
    { id: 27, row: "D", number: 6, isSelected: false },
    { id: 28, row: "D", number: 7, isSelected: false },
  ];
  const seatsE = [
    { id: 29, row: "E", number: 1, isSelected: false },
    { id: 30, row: "E", number: 2, isSelected: false },
    { id: 31, row: "E", number: 3, isSelected: false },
    { id: 32, row: "E", number: 4, isSelected: false },
    { id: 33, row: "E", number: 5, isSelected: false },
    { id: 34, row: "E", number: 6, isSelected: false },
    { id: 35, row: "E", number: 7, isSelected: false },
  ];
  const seatsF = [
    { id: 36, row: "F", number: 1, isSelected: false },
    { id: 37, row: "F", number: 2, isSelected: false },
    { id: 38, row: "F", number: 3, isSelected: false },
    { id: 39, row: "F", number: 4, isSelected: false },
    { id: 40, row: "F", number: 5, isSelected: false },
    { id: 41, row: "F", number: 6, isSelected: false },
    { id: 42, row: "F", number: 7, isSelected: false },
  ];
  const seatsG = [
    { id: 43, row: "G", number: 1, isSelected: false },
    { id: 44, row: "G", number: 2, isSelected: false },
    { id: 45, row: "G", number: 3, isSelected: false },
    { id: 46, row: "G", number: 4, isSelected: false },
    { id: 47, row: "G", number: 5, isSelected: false },
    { id: 48, row: "G", number: 6, isSelected: false },
    { id: 49, row: "G", number: 7, isSelected: false },
  ];

  const handleChange = (val) => {
    if (totalTickets > value.length) {
      setValue(val);
    } else if (totalTickets > val.length) {
      setValue(val);
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <Alert show={error} variant="danger">
        <Alert.Heading>Sorry!</Alert.Heading>
        <p>
          You have tried selecting more seats than you ordered,
          <br /> please try deselecting some before you try to add more.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setError(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
      <Container className="text-center">
        <Row sm="15" className="seatRow">
          {seatsA.map((data) => (
            <ToggleButtonGroup
              type="checkbox"
              value={value}
              onChange={handleChange}
            >
              {data.isSelected ? (
                <ToggleButton value={data.id} disabled>
                  {data.row}
                  {data.number}
                </ToggleButton>
              ) : (
                <ToggleButton value={data.id}>
                  {data.row}
                  {data.number}
                </ToggleButton>
              )}
            </ToggleButtonGroup>
          ))}
        </Row>
        <br />
        <Row sm="15" className="seatRow">
          {seatsB.map((data) => (
            <ToggleButtonGroup
              type="checkbox"
              value={value}
              onChange={handleChange}
            >
              {data.isSelected ? (
                <ToggleButton value={data.id} disabled>
                  {data.row}
                  {data.number}
                </ToggleButton>
              ) : (
                <ToggleButton value={data.id}>
                  {data.row}
                  {data.number}
                </ToggleButton>
              )}
            </ToggleButtonGroup>
          ))}
        </Row>
        <br />
        <Row sm="15" className="seatRow">
          {seatsC.map((data) => (
            <ToggleButtonGroup
              type="checkbox"
              value={value}
              onChange={handleChange}
            >
              {data.isSelected ? (
                <ToggleButton value={data.id} disabled>
                  {data.row}
                  {data.number}
                </ToggleButton>
              ) : (
                <ToggleButton value={data.id}>
                  {data.row}
                  {data.number}
                </ToggleButton>
              )}
            </ToggleButtonGroup>
          ))}
        </Row>
        <br />
        <Row sm="15" className="seatRow">
          {seatsD.map((data) => (
            <ToggleButtonGroup
              type="checkbox"
              value={value}
              onChange={handleChange}
            >
              {data.isSelected ? (
                <ToggleButton value={data.id} disabled>
                  {data.row}
                  {data.number}
                </ToggleButton>
              ) : (
                <ToggleButton value={data.id}>
                  {data.row}
                  {data.number}
                </ToggleButton>
              )}
            </ToggleButtonGroup>
          ))}
        </Row>
        <br />
        <Row sm="15" className="seatRow">
          {seatsE.map((data) => (
            <ToggleButtonGroup
              type="checkbox"
              value={value}
              onChange={handleChange}
            >
              {data.isSelected ? (
                <ToggleButton value={data.id} disabled>
                  {data.row}
                  {data.number}
                </ToggleButton>
              ) : (
                <ToggleButton value={data.id}>
                  {data.row}
                  {data.number}
                </ToggleButton>
              )}
            </ToggleButtonGroup>
          ))}
        </Row>
        <br />
        <Row sm="15" className="seatRow">
          {seatsF.map((data) => (
            <ToggleButtonGroup
              type="checkbox"
              value={value}
              onChange={handleChange}
            >
              {data.isSelected ? (
                <ToggleButton value={data.id} disabled>
                  {data.row}
                  {data.number}
                </ToggleButton>
              ) : (
                <ToggleButton value={data.id}>
                  {data.row}
                  {data.number}
                </ToggleButton>
              )}
            </ToggleButtonGroup>
          ))}
        </Row>
        <br />
        <Row sm="15" className="seatRow">
          {seatsG.map((data) => (
            <ToggleButtonGroup
              type="checkbox"
              value={value}
              onChange={handleChange}
            >
              {data.isSelected ? (
                <ToggleButton value={data.id} disabled>
                  {data.row}
                  {data.number}
                </ToggleButton>
              ) : (
                <ToggleButton value={data.id}>
                  {data.row}
                  {data.number}
                </ToggleButton>
              )}
            </ToggleButtonGroup>
          ))}
        </Row>
      </Container>
    </Container>
  );
};
export default Seating;
