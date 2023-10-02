import React from "react";
import "./Cities.css";

export default function Cities() {
  return (
    <div className="Cities">
      <div className="row">
        <div className="col">
          <a href="/">Tokyo</a>
        </div>
        <div className="col">
          <a href="/">New York</a>
        </div>
        <div className="col">
          <a href="/">London</a>
        </div>
        <div className="col">
          <a href="/">Los Angeles</a>
        </div>
        <div className="col">
          <a href="/">Paris</a>
        </div>
        <div className="col">
          <a href="/">Chicago</a>
        </div>
      </div>
    </div>
  );
}
