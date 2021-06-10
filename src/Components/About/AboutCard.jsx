import {Card,ListGroup,} from 'react-bootstrap'

const AboutCard = (props) => {
    const { name, surname ,age, jobTitle, hobbies, email, img, twitter } = props.data;


console.log(props);
    return (
        <Card className = "mb-2" style={{background:'orange', width: "18 rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>{surname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{jobTitle}, {age}</Card.Subtitle>
              
             <ListGroup style={{sizeAdjust:' 0.5 rem'}}>
                <ListGroup.Item variant = "warning" style={{fontSize: "10pt"}}><b>Hobbies:</b> {hobbies}</ListGroup.Item>
                <ListGroup.Item  variant = "warning" style={{fontSize: "10pt"}}><b>Email:</b>{email}</ListGroup.Item>
                <ListGroup.Item variant = "warning"style={{fontSize: "10pt"}}><b>Twitter:</b>  {twitter}</ListGroup.Item>
                
            </ListGroup>
                
            </Card.Body>
        </Card>

    )

}

export default AboutCard;