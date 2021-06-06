import { Button, Form, Row, Container, Col } from "react-bootstrap";

const Posts = ({ posts }) => {
  const displayRating = (rating) => {
    rating = parseInt(rating);
    return Array(rating).fill("★");
  };

  return (
    <>
      <h1>Discussion Board</h1>

      <Container>
        {posts.length > 0 ? (
          posts.map((post) => (
            <>
              ⊱――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――⊰
              <h2>[user-name]: {post.title}</h2>
              <h3>Movie: {post.movie}</h3>
              <h3>Rating: {displayRating(post.rating)}</h3>
              <h4>Comment: {post.comment}</h4>
            </>
          ))
        ) : (
          <h3>
            <em>No Posts Yet!</em>
          </h3>
        )}
      </Container>
    </>
  );
};

export default Posts;
