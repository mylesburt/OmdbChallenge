import React from "react";
import "../../styles.css";

function RangeSlider() {
  return (
    <div className="container">
      <div className="p-4">
        <div>YEAR</div>
        <div>
          <input type="range"></input>
        </div>
      </div>
    </div>
  );
}

export default RangeSlider;
