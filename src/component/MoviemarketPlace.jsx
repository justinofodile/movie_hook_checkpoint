import React from "react";
import CreateNewMovie from "./CreateNewMovie";
import Filter from "./Filter";
import MovieList from "./MovieList";
// import NavBar from "./component/NavBar";
import movies from "../data";
import { useMemo, useState } from "react";

const MovieMarketPlace = () => {
  //Creating a useState management for movie
  const [myMovies, setmyMovies] = useState(movies);
  const [random, setRandom] = useState(0);
  // console.log(myMovies);

  //let memorize the my movies in a useMemo Hook

  const memorizedMovies = useMemo(() => {
    return {
      myMomorizedMovies: myMovies,
    };
  }, [random]);
  return (
    <div>
      {" "}
      <div className="max-w-4xl flex justify-between mx-auto my-4 gap-4 align-middle max-sm:flex-col-reverse">
        {/* Calling of our filter component */}
        <Filter setmyMovies={setmyMovies} memorizedMovies={memorizedMovies} />
        {/* Calling of our CreateNewMovie component */}
        <CreateNewMovie
          setmyMovies={setmyMovies}
          memorizedMovies={memorizedMovies}
          setRandom={setRandom}
        />
      </div>
      {
        // If the searched result is 0, this returns  Searched movies did not return any result else returns Movie Component
        myMovies.length === 0 ? (
          <div className="text-center py-24 text-3xl">
            Searched movies did not return any result
          </div>
        ) : (
          <MovieList myMovies={myMovies} />
        )
      }
    </div>
  );
};

export default MovieMarketPlace;
