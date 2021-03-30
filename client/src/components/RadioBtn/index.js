import React from "react";
import "../../styles.css";

function RadioBtns() {
  return (
    <div className="container">
      <div className="p-4">
        <div>TYPE</div>
        <div>
          <input type="radio" value="Any" name="genre" /> Any
          <input type="radio" value="Movie" name="genre" /> Movie
          <input type="radio" value="Series" name="genre" /> Series
          <input type="radio" value="Episodes" name="genre" /> Episodes
        </div>
      </div>
    </div>
  );
}

export default RadioBtns;
