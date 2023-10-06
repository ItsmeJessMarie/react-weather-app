import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import Cities from "./Cities";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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

  function search() {
    const apiKey = "62231151ce343c4d68652e1617efc22f";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function searchLocation(position) {
    const apiKey = "62231151ce343c4d68652e1617efc22f";
    const units = "metric";
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
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
                  search("Tokyo");
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
                  search("New York");
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
                  search("London");
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
                  search("Los Angeles");
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
                  search("Paris");
                }}
              >
                Paris
              </a>
            </div>
            <div className="col">
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  search("Chicago");
                }}
              >
                Chicago
              </a>
            </div>
          </div>
        </div>
        <div className="Search">
          <form onSubmit={() => handleSubmit(city)}>
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
          <WeatherInfo data={weatherData} />
        </div>
      </>
    );
  } else {
    search(city);
    return "Loading...";
  }
}
