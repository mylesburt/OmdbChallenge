import React from "react";
import "../../styles.css";

function RadioBtns() {
  return (
    <div className="container">
      <div className="p-4">
        <div>TYPE</div>
        <div>
          <label className="inline-flex items-center">
            <input type="radio" value="Any" name="genre" />
            <h5 className="ml-1 mr-2">Any</h5>
          </label>
          <div className="inline-flex items-center">
            <input type="radio" value="Movies" name="genre" />
            <h5 className="ml-1 mr-2">Movies</h5>
          </div>
          <div className="inline-flex items-center">
            <input type="radio" value="Series" name="genre" />
            <h5 className="ml-1 mr-2">Series</h5>
          </div>
          <div className="inline-flex items-center">
            <input type="radio" value="Episodes" name="genre" />
            <h5 className="ml-1 mr-2">Episodes</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioBtns;
