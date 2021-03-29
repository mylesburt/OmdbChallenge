import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar/index.js";
import SearchList from "./components/SearchList/index.js";
import MovieInfo from "./components/MovieInfo/index.js";

function App() {
  return (
    <div>
      <Navbar />
      <SearchList />
      <MovieInfo />
    </div>
  );
}

export default App;
