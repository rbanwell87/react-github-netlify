import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Temperature">
        <div className="City">
          <h1>{props.data.city}</h1>
          <strong>
            <h4 id="date">
              <FormattedDate date={props.data.date} />
            </h4>
          </strong>
        </div>
        <div className="CurrentTemperature">
          <img src={props.data.icon} alt="weather-icon" id="icon" />
          <span id="temperature">{Math.round(props.data.temperature)}</span>
          <span className="units">
            <a href="https://njh7z.csb.app/?#" id="celcius-link">
              °C
            </a>
            |
            <a href="https://njh7z.csb.app/?#" id="fahrenheit-link">
              °F
            </a>
          </span>
        </div>

        <ul>
          <strong>
            <li>
              <span id="description">{props.data.description}</span>
            </li>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{props.data.wind}</span> km/h
            </li>
          </strong>
        </ul>
      </div>
    </div>
  );
}
