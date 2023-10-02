import React from "react";
import "./DateUpdate.css";

export default function DateUpdate() {
  let weatherData = {
    date: "Tuesday, September 12, 2:25PM",
  };
  return (
    <div className="DateUpdate">
      <span className="date-update">
        Last updated:
        <span className="current-date"> {weatherData.date}</span>
      </span>
    </div>
  );
}
