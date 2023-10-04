import "./App.css";
import Cities from "./Cities";
import Weather from "./Weather";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container mb-0">
        <Cities />
        <Weather />
        <WeatherInfo defaultCity="Milwaukee" />
        <Forecast />
      </div>
      <footer className="footer-container">
        This project was coded by{" "}
        <a
          href="https://www.shecodes.io/graduates/77936-jessica-boll"
          target="_blank"
          rel="noreferrer noopener"
          className="shecodes-profile-link"
        >
          Jessica Boll
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/ItsmeJessMarie/react-weather-app"
          target="_blank"
          rel="noreferrer noopener"
          className="git-hub-link"
        >
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}
