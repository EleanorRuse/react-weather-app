import React from "react";
import "./WeatherTemperature.css";
import FormatDate from "./FormatDate";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature"> 
  <h1>{props.data.city}</h1>
    <ul>
        <li><FormatDate date={props.data.date}/></li>
        <li className="text-capitalize">{props.data.description}</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
            <img src={props.data.iconUrl}
            alt="weatherIcon">
            </img>
<span className="temperature">{props.data.temperature}</span>
<span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul><li>
            Visibility: <span className="visibility">100</span>%
          </li>
          <li>
            Humidity: <span className="humidity">{props.data.humidity}</span>%
          </li>
          <li>
            Wind: <span className="wind">{props.data.wind}</span> km/h
          </li>
          
          </ul>
        </div>
    </div>
        </div>
    );
}
