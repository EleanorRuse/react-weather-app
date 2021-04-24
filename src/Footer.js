import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        <a href="https://github.com/EleanorRuse/my-weather-app">
          Open-source code
        </a>
        by Eleanor Ruse
      </small>
      
      <em className="photographer">Background Image by Dariusz Sankowski</em>
    </div>
  );
}