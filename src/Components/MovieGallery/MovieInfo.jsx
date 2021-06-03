import React, { useEffect, Image } from "react";

const MovieInfo = (props) => {
  const { movies } = props;
  const [movie, setMovie] = useState([]);

  return (
    <>
      {/* Main Poster */}
      <Image src={movies.Poster} width="1000" />
      <Title>
        <h2>{movies.Title}</h2>
      </Title>

      {/* Main Info */}
      <div style={{ display: "flex", justifyContent: "centre" }}>
        <button variant="outline-danger" cursor="none">
          {movies.Genre}
        </button>
        <h2>{movies.Plot}</h2>
        <h3>Runtime: {movies.Runtime}</h3>
        <h3>Actors: {movies.Actors}</h3>
        <br />
        <h3>
          Film Rating: {movies.Rating}| Film Awards:{movies.Awards}{" "}
        </h3>
      </div>

      <Button variant="outline-danger">Book Tickets</Button>
    </>
  );
};

export default MovieInfo;
