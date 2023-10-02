import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="five-day" id="five-day">
        Your five day forecast:
      </div>
      <div className="full-forecast" id="full-forecast">
        <div className="row">
          <div className="col">
            <span className="emoji">☀️</span>
            <div className="low-hi">31°/63°</div>
            <div className="day">Today</div>
          </div>
          <div className="col">
            <span className="emoji">☁️</span>
            <div className="low-hi">37°/61°</div>
            <div className="day">Fri</div>
          </div>
          <div className="col">
            <span className="emoji">🌧️</span>
            <div className="low-hi">39°/50°</div>
            <div className="day">Sat</div>
          </div>
          <div className="col">
            <span className="emoji">🌧️</span>
            <div className="low-hi">34°/42°</div>
            <div className="day">Sun</div>
          </div>
          <div className="col">
            <span className="emoji">🌧️</span>
            <div className="low-hi">34°/43°</div>
            <div className="day">Mon</div>
          </div>
        </div>
      </div>
    </div>
  );
}
