import React from "react";
import "../../styles.css";
import ResultCard from "../ResultCard";

function SearchList() {
  return (
    <div className="grid grid-row-1">
      <h3 className="py-4 pl-5">Results (PROP)</h3>
      <ResultCard />
    </div>
  );
}

export default SearchList;
