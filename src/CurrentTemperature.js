import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  return (
    <div className="row">
      <div className="col-12 col-sm-6">
        <div className="weather-temperature">
          <div className="conditionBox">
            <p className="description"></p>
            <div className="row">
              <div className="col-5">
              </div>
        
              <div className="col-7">
                <div className="mainInfo">
        
                     <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt=""
                  className="currentEmoji"
                />
                 <span className="units">
                    <strong className="temperature">18</strong>
                    <a href="/" id="celsius-link" className="active">
                      °C
                    </a>
                    |
                    <a href="/" id="fahrenhiet-link">
                      °F
                    </a>
                  <ul className="feels-like">
                    <li>
                      Feels like: <span className="feel">16</span>
                    </li>
                  </ul>
                    </span>               
                     </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


