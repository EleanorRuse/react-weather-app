import React from "react";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature"

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo"> 
  <h1>{props.data.city}</h1>
    <ul>
        <li><FormatDate date={props.data.date}/></li>
        <li className="text-capitalize">{props.data.description}</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
          <div className="float-left">
          <WeatherIcon 
          code={props.data.icon} />
              </div>

      <WeatherTemperature celsius={props.data.temperature} />
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
