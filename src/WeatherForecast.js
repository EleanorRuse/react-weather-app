import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
function handleResponse(response){
    console.log(response.data);
}

let apiKey="99249e6036b7cd3ba4446e3f8c097e60"
let longitude= props.coordinates.lon;
let lattitude= props.coordinates.lat;
let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${lattitude}&lon=${longitude}&appid=${apiKey}&units=metric`
axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
<div className="WeatherForecast-day">Thur</div>
<WeatherIcon code="01d" size={36}/>
<div className="WeatherForecast-temperature">
   <span className="WeatherForecast-temperature-max">19° 
       </span> 
<span className="WeatherForecast-temperature-min">10°
    </span>
    </div>
    </div>
</div>
</div>
    )
}