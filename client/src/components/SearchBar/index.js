import React from "react";
import "../../styles.css";

function SearchBar() {
  return (
    <div className="p-4 text-2xl flex">
      <span className="w-auto flex justify-end items-center text-white p-2">
        <i className="fas fa-search text-white"></i>
      </span>
      <input
        className="w-full rounded p-2 bg-transparent border-none focus:outline-none"
        type="text"
        placeholder="Search Movies"
      />
    </div>
  );
}

export default SearchBar;
