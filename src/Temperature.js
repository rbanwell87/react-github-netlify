import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Temperature.css";

export default function Temperature() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });

    setReady(true);
  }
  return (
    <div className="WeatherInfo">
      <div className="Temperature">
        <div className="City">
          <h1>Toronto</h1>
          <strong>
            <FormattedDate date={weatherData.date} />
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
  if (ready) {
    return (
      <div className="Temperature">
        <div className="City">
          <h1>Toronto</h1>
          <strong>
            <h4 id="date">{weatherData.date.getDay()}</h4>
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
    );
  } else {
    const apiKey = "567bc6c3d13f22fc404618e54d8ecf08";
    let city = "Toronto";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
