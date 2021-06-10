import React from 'react';
import { Card, Accordion, Button, Table } from 'react-bootstrap'
import CinemaModal from './CinemaModal';

const CinemaCard = (cinema, id) => {

  const { directions,img,location, name, opening_times } = cinema.cinema;
  
  return (
    <>

      <Card bg="dark">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={id}
          style={{
            color:"#dc3545"
          }}>
            {name}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={id}>
          <Card.Body>
            <h1>Opening Times</h1>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Open</th>
                  <th>Close</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>{opening_times.Mon.open} </td>
                  <td>{opening_times.Mon.close} </td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>{opening_times.Tue.open} </td>
                  <td>{opening_times.Tue.close} </td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>{opening_times.Wed.open} </td>
                  <td>{opening_times.Wed.close} </td>
                </tr>
                <tr>
                  <td>Thurs</td>
                  <td>{opening_times.Thurs.open} </td>
                  <td>{opening_times.Thurs.close} </td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>{opening_times.Fri.open} </td>
                  <td>{opening_times.Fri.close} </td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>{opening_times.Sat.open} </td>
                  <td>{opening_times.Sat.close} </td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>{opening_times.Sun.open} </td>
                  <td>{opening_times.Sun.close} </td>
                </tr>

              </tbody>

            </Table>
            <br />
          
            <CinemaModal name={name} location={location} directions={directions} image={img} />






          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  )

}

export default CinemaCard;

