import React from "react";
import "../../styles.css";

function MovieInfo() {
  return (
    <div className="container">
      <div className="grid-rows-1 h-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <div className="bg-blue-500">
              <p>Heya cowboy.</p>
            </div>
          </div>
          <div className="col-span-8">
            <div className="bg-purple-300">
              <div className="grid-rows-1">
                <div className="grid grid-cols-12">
                  <div className="col-span-full">
                    <button>Howdy.</button>
                  </div>
                  <div className="col-span-full">
                    <p>Title of movie PROP.</p>
                  </div>
                  <div className="col-span-full">
                    <div className="flex">
                      <span>Rating Prop and icon.</span>
                      <h5>Year PROP</h5>
                      <h5>Tagline PROPS</h5>
                      <h5>Duration PROP</h5>
                    </div>
                  </div>
                  <div className="col-span-full">
                    <h5>Actors will go here PROP</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-rows-1 h-auto">
        <div className="col-span-full">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="grid-rows-1 h-auto">
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
