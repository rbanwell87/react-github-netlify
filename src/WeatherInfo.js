import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <div className="Temperature">
        <div className="City">
          <h1>Toronto</h1>
          <strong>
            <h4 id="date">
              <FormattedDate date={weatherData.date} />
            </h4>
          </strong>
        </div>
        <div className="CurrentTemperature">
          <img
            src="http://openweathermap.org/img/wn/04d@2x.png"
            alt="weather-icon"
            id="icon"
          />
          <span id="temperature">{Math.round(weatherData.temperature)}</span>
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
              <span id="description">{weatherData.description}</span>
            </li>
            <li>
              Humidity: <span id="humidity">{weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{weatherData.wind}</span> km/h
            </li>
          </strong>
        </ul>
      </div>
    </div>
  );
}
