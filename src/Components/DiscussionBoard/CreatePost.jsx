import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import * as Utils from "../utils/prof-filter-api";

const CreatePosts = ({ handleCreatePost }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [movie, setMovie] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.length <= 0 && comment.length <= 0) {
      return alert("Please fill up the required fields");
    }

    const filteredComment = await Utils.profanityFilter(comment);

    const postData = { name, title, movie, rating, comment: filteredComment };

    handleCreatePost(postData);

    setName("");
    setTitle("");
    setMovie("");
    setRating("");
    setComment("");
  };
  return (
    <>
      <Container>
 

        <br />

        <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="Topic Title" required>

       
            <Form.Label>
              <h3>Enter your name</h3>
            </Form.Label>

            <Form.Text className="text-muted">Enter your display name*</Form.Text>
            <Form.Control
              type="name"
              value={name}
              autocomplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>


          <Form.Group className="mb-3" controlId="Topic Title" required>
            <Form.Label>
              <h3>Topic Title:</h3>
            </Form.Label>
            <Form.Text className="text-muted">Enter Post Title*</Form.Text>
            <Form.Control
              type="title"
              value={title}
              autocomplete="off"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <br />

          <Form.Group className="mb-3" controlId="Movie Name" >
            <Form.Label>
              <h3>Movie Name:</h3>
            </Form.Label>
            <Form.Text className="text-muted" >
              Enter a name of the movie if you wish to review a specific film
            </Form.Text>
            <Form.Control
              type="movie-name"
              value={movie}
              onChange={(e) => setMovie(e.target.value)}
              autocomplete="off"
            />
          </Form.Group>

          <br />

          <Form.Group className="rating" controlId="rating">
            <Form.Label>
              <h3>Rating:</h3>
            </Form.Label>
            <select id="ddlViewBy" onChange={(e) => setRating(e.target.value)}>
              <option value="5" selected="selected">
                ★★★★★
              </option>
              <option value="4" selected="selected">
                ★★★★
              </option>
              <option value="3" selected="selected">
                ★★★
              </option>
              <option value="2" selected="selected">
                ★★
              </option>
              <option value="1" selected="selected">
                ★
              </option>
            </select>
          </Form.Group>

          <Form.Group controlId="Textarea1">
            <Form.Label>
              <h3>Comment</h3>
            </Form.Label>
            <Form.Text className="text-muted">
              Enter a review for the film or just leave a comment!*
            </Form.Text>
            <Form.Control
              as="textarea"
              placeholder="Your Message"
              onChange={(e) => setComment(e.target.value)}
              name="comment-body"
              value={comment}
              rows={4}
              required
            />
          </Form.Group>

          <br />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default CreatePosts;
