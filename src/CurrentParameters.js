import React from "react";
import "./CurrentParameters.css";

export default function CurrentParameters() {
  let weatherData = {
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png",
    temperature: 64,
    description: "Partly Cloudy",
    humidity: 76,
    wind: 10,
  };
  return (
    <div className="CurrentParameters">
      <span className="current-icon">
        <img src={weatherData.imgUrl} alt={weatherData.description} />
      </span>
      <span className="temperature-now">{weatherData.temperature}</span>
      <span className="degree">°</span>
      <span className="fahrenheit">F</span>
      <h3 className="weather-description">{weatherData.description}</h3>
      <span className="wind-humidity-parameters">
        Humidity: <span className="humidity">{weatherData.humidity}</span>%
        Wind:
        <span className="wind"> {weatherData.wind}</span> mph
      </span>
    </div>
  );
}
