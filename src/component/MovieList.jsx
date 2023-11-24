import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ myMovies }) => {
  //   This component iterates through our movie data from the App component and sends to the movie card whihc in turns displayes it in card
  return (
    <div className="max-w-4xl mx-auto mt-5">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {myMovies.map((movie) => (
          <MovieCard {...movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
