import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form>
      <div className="Search">
        <div className="container">
          <div className="row">
            <div class="col-8">
              <input
                type="search"
                placeholder="Search a city..."
                className="form-control w-95"
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
