import React from "react";
import "../../styles.css";

function ResultCard() {
  return (
    <div className="flex">
      <div className="overflow-auto h-full text-left px-4 py-4 w-full justify-end border-b-2 border-gray-900">
        <div className="flex items-center flex-wrap">
          <img
            alt="*"
            className="inline-block object-cover object-center h-20 w-20 mb-4 bg-gray-100 rounded"
            src="https://dummyimage.com/302x302/94a3b8/ffffff"
          />

          <span className="flex flex-col flex-grow pl-4">
            <span className="font-bold text-2xl -mt-4">Software developer</span>
            <span className="text-m">Location: Lomndon sdf</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
