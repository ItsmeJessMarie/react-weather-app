import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container mb-0">
        <Weather defaultCity="Milwaukee" />
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
        </a>{" "}
        and{" "}
        <a
          href="https://jb-react-weather-app.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
          className="netlify-link"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
