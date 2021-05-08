import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature() {
  return (
    <div className="col-12 col-sm-6">
      <div className="infoBox">
        <ul>
          <li>
            Visibility: <span className="visibility">100</span>%
          </li>
          <li>
            Humidity: <span className="humidity">50</span>%
          </li>
          <li>
            Wind: <span className="wind">5</span> km/h
          </li>
          <li>
            Max Temp: <span className="maxTemp">19</span> °C
          </li>
          <li>
            Min Temp: <span className="minTemp">17</span> °C
          </li>
        </ul>
      </div>
    </div>
  );
}


