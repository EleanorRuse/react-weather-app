import React from "react";
import "./Overview.css";

export default function Overview() {
  return (
    <div className="overview">
      <h1 className="city">London</h1>
      <h5>
        <ul>
          <li>
            Last updated: 15:00 <span className="date"></span>
          </li>
        </ul>
      </h5>
    </div>
  );
}
