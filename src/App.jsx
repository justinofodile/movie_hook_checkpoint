import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import CreateNewMovie from "./component/CreateNewMovie";
import Filter from "./component/Filter";
import MovieList from "./component/MovieList";
import MovieMarketPlace from "./component/MoviemarketPlace";
import NavBar from "./component/NavBar";
import movies from "./data";
import { useMemo, useState } from "react";
import Home from "./component/Home";
import MovieDetails from "./component/MovieDetails";
import MovieLayout from "./layout/MovieLayout";

function App() {
  return (
    <div>
      {/* Our Navbar component */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="moviemarketplace" element={<MovieLayout />}>
          <Route index element={<MovieMarketPlace />} />
          <Route path=":movId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
