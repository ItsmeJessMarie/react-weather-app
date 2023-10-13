import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("fahrenheit");

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function searchCity(city) {
    const apiKey = "5293d8454b519c30f6f6331f38c85b4c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function search() {
    const apiKey = "5293d8454b519c30f6f6331f38c85b4c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function searchLocation(position) {
    const apiKey = "5293d8454b519c30f6f6331f38c85b4c";
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <>
        <div className="Cities">
          <div className="row">
            <div className="col">
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  searchCity("Tokyo");
                }}
              >
                Tokyo
              </a>
            </div>
            <div className="col">
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  searchCity("New York");
                }}
              >
                New York
              </a>
            </div>
            <div className="col">
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  searchCity("London");
                }}
              >
                London
              </a>
            </div>
            <div className="col">
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  searchCity("Chicago");
                }}
              >
                Chicago
              </a>
            </div>
            <div className="col">
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  searchCity("Los Angeles");
                }}
              >
                Los Angeles
              </a>
            </div>
            <div className="col">
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  searchCity("Paris");
                }}
              >
                Paris
              </a>
            </div>
          </div>
        </div>
        <div className="Search">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  autoFocus="on"
                  autoComplete="off"
                  className="form-control enter-city shadow-sm"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-primary shadow-sm"
                />
              </div>
              <div className="col-3">
                <input
                  onClick={getCurrentLocation}
                  type="submit"
                  value="Current"
                  className="form-control btn btn-success shadow-sm"
                />
              </div>
            </div>
          </form>
          <WeatherInfo unit={unit} setUnit={setUnit} data={weatherData} />
          <WeatherForecast unit={unit} coordinates={weatherData.coordinates} />
        </div>
      </>
    );
  } else {
    search();
    return "Loading...";
  }
}
