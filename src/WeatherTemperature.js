import React from "react";
import "./WeatherInfo";
import "./App";

export default function WeatherTemperature(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (props.unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="current-temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="current-temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
