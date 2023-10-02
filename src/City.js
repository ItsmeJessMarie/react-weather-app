import React from "react";
import "./City.css";

export default function City() {
  let weatherData = {
    city: "Milwaukee",
  };
  return (
    <div className="City">
      <h1 className="City">{weatherData.city}</h1>
    </div>
  );
}
