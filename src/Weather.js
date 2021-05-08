import React, { useState } from "react";
import axios from 'axios';
import WeatherTemperature from "./WeatherTemperature";

import  "./Weather.css"

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false });
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            temperature: Math.round(response.data.main.temp), 
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        });

    }

    if(weatherData.ready) {
return (
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search"placeholder="Enter a city..." className="form-control"/>
            </div>
            <div className="col-3">
<input type="submit" value="Search" className="btn btn-primary" />
        </div>
        </div>        
        </form>
        <WeatherTemperature data={weatherData}/>
    </div> 
);
} else {
    
   const apiKey = `99249e6036b7cd3ba4446e3f8c097e60`;
   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return "Loading...";
 }
}
