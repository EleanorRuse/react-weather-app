import React from "react";
import axios from 'axios';

export default function Weather(props) {
    function handleResponse(response){
        alert (`The Weather in ${response.city.name} is ${Math.round(response.data.main.temp)}°C`)
    }
    let apiKey ="99249e6036b7cd3ba4446e3f8c097e60";
    let  apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return<h1>
         Hello World!
        </h1>;
}
