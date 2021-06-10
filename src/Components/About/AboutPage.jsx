import details from "../static/TeamDetails.json"
import AboutCard from "./AboutCard"
import AboutPage from "./AboutPage.css"
import { CardDeck, Container, Image } from "react-bootstrap"

const About = () => {
    return (
        <>
        <div className="text-center">
            <h1>About Us</h1>
        </div>
            <Container>
                <CardDeck>
                {
                    details.map((data, id) => (
                            <AboutCard key={id} data={data} />
                         ))
                }
                </CardDeck>
                <Image
                    src={"https://i.ibb.co/NNcpH87/Logo-Final.png"}
                    alt="QA Cinema Logo"
                    className="center"
                />
            </Container>
        </>
    )

}

export default About;
