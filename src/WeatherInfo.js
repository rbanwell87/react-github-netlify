import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Temperature">
        <h1>{props.data.city}</h1>
        <strong>
          <h4 id="date">
            <FormattedDate date={props.data.date} />
          </h4>
        </strong>

        <WeatherIcon code={props.data.icon} size={64} />

        <WeatherTemperature celsius={props.data.temperature} />

        <ul>
          <li>
            <span id="description">{props.data.description}</span>
          </li>
          <li>
            Humidity: <span id="humidity">{props.data.humidity}</span>%
          </li>
          <li>
            Wind: <span id="wind">{props.data.wind}</span> km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
