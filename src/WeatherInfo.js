import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-7">
          <div className="City">
            <h1>{props.data.city}</h1>
          </div>
          <div className="DateUpdate">
            <span className="date-update">
              Last updated:
              <span className="current-date">
                <FormattedDate date={props.data.date} />
              </span>
            </span>
          </div>
        </div>
        <div className="col-5 mb-4">
          <div className="WeatherParameters">
            <span className="current-icon">{""}</span>
            <span className="current-temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="degree">°</span>
            <span className="fahrenheit">F</span>
            <h3 className="weather-description">{props.data.description}</h3>
            <span className="wind-humidity-parameters">
              Humidity: <span className="humidity">{props.data.humidity}</span>%
              Wind:
              <span className="wind"> {Math.round(props.data.wind)}</span> mph
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
