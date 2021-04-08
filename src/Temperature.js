import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div className="CurrentTemperature">
        <span id="temperature">11</span>
        <span className="units">
          <a href="https://njh7z.csb.app/?#" id="celcius-link">
            °C
          </a>{" "}
          |
          <a href="https://njh7z.csb.app/?#" id="fahrenheit-link">
            °F
          </a>
        </span>
        <img
          src="http://openweathermap.org/img/wn/04d@2x.png"
          alt="weathers-icon"
          id="icon"
        />{" "}
      </div>
      <ul>
        <li>
          Humidity: <span id="humidity">32</span>%
        </li>
        <li>
          Wind: <span id="wind">15</span> km/h
        </li>
      </ul>
    </div>
  );
}
