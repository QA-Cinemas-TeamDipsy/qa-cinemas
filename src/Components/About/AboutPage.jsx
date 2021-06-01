import details from "../static/TeamDetails.json"
import AboutCard from "./AboutCard"

const About = () => {
    return (
        <>
            <h1>About</h1>
            {
                details.map((data, id) => (
                    <AboutCard key={id} data={data} />
                ))
            }

        </>
    )

}

export default About;
