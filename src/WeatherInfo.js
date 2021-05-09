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
          <WeatherTemperature celsius={props.data.temperature} />
          
          <WeatherIcon 
          code={props.data.icon} />
              </div>

      
        </div>
        <div className="col-6">
          <ul>
          <li>
            Humidity: <span className="humidity">{props.data.humidity}</span>%
          </li>
          <li>
            Wind: <span className="wind">{props.data.wind}</span> km/h
          </li>
          <li>
            Feels Like: <span className="feel">{props.data.feelsLike}</span>°C
          </li>
          </ul>
        </div>
    </div>
        </div>
    );
}
