import {Card,ListGroup,ListGroupItem,CardSubtitle} from 'react-bootstrap'

const AboutCard = (props) => {
    const { name, surname ,age, jobTitle, hobbies, email, img, twitter } = props.data;


console.log(props);
    return (
        <Card className = "mb-10" style={{background:'orange', width: '18 rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>{surname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{jobTitle}, {age}</Card.Subtitle>

             <ListGroup >
                <ListGroup.Item variant = "warning"> Hobbies: {hobbies}</ListGroup.Item>
                <ListGroup.Item variant = "warning">Email: {email}</ListGroup.Item>
                <ListGroup.Item variant = "warning">Twitter: {twitter}</ListGroup.Item>
                
            </ListGroup>
                
            </Card.Body>
        </Card>

    )

}

export default AboutCard;