import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Type a city..."
              autoFocus="on"
              autoComplete="off"
              id="city-input"
              className="form-control enter-city shadow-sm"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              id="search-input"
              className="form-control btn btn-primary shadow-sm"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Current"
              id="current-input"
              className="form-control btn btn-success shadow-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
