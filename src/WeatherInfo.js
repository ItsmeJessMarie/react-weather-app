import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-7">
          <div className="City">
            <h1 className="city">{props.data.city}</h1>
          </div>
          <div className="DateUpdate">
            <span className="date-update">
              <FormattedDate date={props.data.date} />
            </span>
          </div>
        </div>
        <div className="col-5">
          <div className="WeatherParameters mt-3">
            <div className="float-left">
              <span className="current-icon">
                <WeatherIcon code={props.data.icon} />
              </span>
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
            <h3 className="weather-description">{props.data.description}</h3>
            <div className="wind-humidity-parameters space-between">
              Humidity: {props.data.humidity}% Wind:{" "}
              {Math.round(props.data.wind)} mph
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
