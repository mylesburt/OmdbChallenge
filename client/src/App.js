import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar/index.js";
import SearchList from "./components/SearchList/index.js";
import MovieInfo from "./components/MovieInfo/index.js";

function App() {
  return (
    <div>
      <Navbar />
      <div className="grid-rows-1">
        <div className="grid grid-cols-12">
          <div className="col-span-5">
            <SearchList />
          </div>
          <div className="col-span-7">
            <MovieInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
