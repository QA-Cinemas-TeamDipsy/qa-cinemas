

const BookTickets = () => {
    const [adultTickets, setAdultTickets] = useState("2021");
    const [childTickets, setChildTickets] = useState("");
    return (
        <Form>
            <Form.Group as={Col} controlId="adultTickets">
                <Form.Label>Adult Tickets</Form.Label>
                <Form.Control value={adultTickets} onChange={(e) => setAdultTickets(e.target.value)} as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="childTickets">
                <Form.Label>Child Tickets</Form.Label>
                <Form.Control value={childTickets} onChange={(e) => setChildTickets(e.target.value)} as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                </Form.Control>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default BookTickets;