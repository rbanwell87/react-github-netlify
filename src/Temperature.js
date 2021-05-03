import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Temperature.css";

export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "567bc6c3d13f22fc404618e54d8ecf08";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div classname="WeatherSearch">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div class="col-8">
                <input
                  type="search"
                  placeholder="Search a city..."
                  className="form-control w-95"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-4">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
