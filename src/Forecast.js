import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="FiveDayForecast">
      <p>
        <strong>5 Day Forecast</strong>
      </p>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-2">Monday</div>
          <div className="col-2">Tuesday</div>
          <div className="col-2">Wednesday</div>
          <div clasName="col-2">Thursday</div>
          <div className="col-2">Friday</div>
          <div className="col-2">Saturday</div>

          <div className="col-2">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="weathers-icon"
              id="icon"
            />
          </div>
          <div className="col-2">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="weathers-icon"
              id="icon"
            />
          </div>
          <div className="col-2">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="weathers-icon"
              id="icon"
            />
          </div>
          <div className="col-2">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="weathers-icon"
              id="icon"
            />
          </div>
          <div className="col-2">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="weathers-icon"
              id="icon"
            />
          </div>
          <div className="col-2">
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
