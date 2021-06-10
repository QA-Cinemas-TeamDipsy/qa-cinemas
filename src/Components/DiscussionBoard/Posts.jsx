import { Container, Media } from "react-bootstrap";

const Posts = ({ posts }) => {
  const displayRating = (rating) => {
    rating = parseInt(rating);
    return Array(rating).fill("★");
  };

  return (
    <>
     <div className="text-center">
        <h1>Discussion Board</h1>
        </div>
      <Container>
        {posts.length > 0 ? (
          posts.map((post) => (
            <>
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://img.icons8.com/nolan/64/user.png"
              alt="Generic placeholder"
            />
          <Media.Body>
          <h2>{post.name}: {post.title}</h2>
             <p>
             <h3>Movie: {post.movie}</h3>
              <h3>Rating: {displayRating(post.rating)}</h3>
              <h4>Comment: {post.comment}</h4>
            </p>
            <br/>
           </Media.Body>
         </Media>
            </>
          ))
        ) : (
          <>
          <h3>
            <em>No Posts Yet!</em>
            
          </h3>
          <p> Watched a movie you really loved? Leave a review by pressing on the Wirte Posts tab. </p>    
          </>
        )}
      </Container>
    </>
  );
};

export default Posts;
