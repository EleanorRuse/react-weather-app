import "./App.css";
import React from "react";
import SearchForm from "./SearchForm";
import CurrentTemperature from "./CurrentTemperature";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import Footer from "./Footer";
import Overview from "./Overview";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <SearchForm />
            <Overview />
            <CurrentTemperature />
            <WeatherInfo />
            <Forecast />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
