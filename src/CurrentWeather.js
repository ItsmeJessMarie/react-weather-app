import React from "react";
import "./CurrentWeather.css";
import City from "./City";
import DateUpdate from "./DateUpdate";
import CurrentParameters from "./CurrentParameters";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-7">
          <City />
          <DateUpdate />
        </div>
        <div className="col-5 mb-4">
          <CurrentParameters />
        </div>
      </div>
    </div>
  );
}
