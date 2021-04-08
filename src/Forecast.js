import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="FiveDayForecast">
      <p>
        <strong>5 Day Forecast</strong>
      </p>
      <hr />
      <div class="container">
        <div class="row">
          <div class="col-2">Monday</div>
          <div class="col-2">Tuesday</div>
          <div class="col-2">Wednesday</div>
          <div class="col-2">Thursday</div>
          <div class="col-2">Friday</div>
          <div class="col-2">Saturday</div>
          <div class="col-2">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="weathers-icon"
              id="icon"
            />
          </div>
          <div class="col-2">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="weathers-icon"
              id="icon"
            />
          </div>
          <div class="col-2">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="weathers-icon"
              id="icon"
            />
          </div>
          <div class="col-2">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="weathers-icon"
              id="icon"
            />
          </div>
          <div class="col-2">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="weathers-icon"
              id="icon"
            />
          </div>
          <div class="col-2">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="weathers-icon"
              id="icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
