import React from "react";
import "../../styles.css";
import SearchBar from "../SearchBar";

function Navbar() {
  return (
    <div className="grid-rows-1">
      <div className="bg-gray-500 text-white">
        <div className="grid grid-cols-12 gap-2 h-24 flex flex-wrap content-center">
          <div className="col-span-6 ml-40">
            <SearchBar />
          </div>
          <div className="col-span-3">
            <p>Timeline bar.</p>
          </div>
          <div className="col-span-3">
            <p>Radio btns.</p>
          </div>
        </div>
      </div>
    </div>

    // <div className="bg-gray-500 text-white">
    //   <div className="col-span-5">
    //     <input placeholder="Search"></input>
    //   </div>
    //   <div className="">
    //     <h4>YEAR</h4>
    //     <input></input>
    //     {/* <YearFilter /> */}
    //   </div>
    //   <div className="">
    //     <h4>TYPE</h4>
    //     {/* <RadioBtns /> */}
    //   </div>
    // </div>
  );
}

export default Navbar;
