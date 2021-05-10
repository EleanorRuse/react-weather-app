import React, { useState } from "react";
import axios from 'axios';
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import  "./Weather.css"

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ready: false });
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            temperature: Math.round(response.data.main.temp), 
            humidity: response.data.main.humidity,
            feelsLike: Math.round(response.data.main.feels_like),
            wind: response.data.wind.speed,
            city: response.data.name,
            icon: response.data.weather[0].icon
        });
    }

function search() {
const apiKey = `99249e6036b7cd3ba4446e3f8c097e60`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
event.preventDefault();
search();
 }
 
function handleChange(event){
setCity(event.target.value);
}

    if(weatherData.ready) {
return (
    <div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
            <input type="search"
            placeholder="Enter a city..." 
            className="form-control"
            autoFocus="on"
            onChange={handleChange}/>
            </div>
            <div className="col-3">
<input type="submit" 
value="Search" 
className="btn btn-primary" />
        </div>
        </div>        
        </form>
        <WeatherInfo data={weatherData}/>
        <WeatherForecast />
    </div> 
);

} else {
search();
return "Loading...";
 }
}
