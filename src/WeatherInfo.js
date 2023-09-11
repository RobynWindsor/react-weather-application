import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature";

export default function weatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="weather text-capitalize">
        <WeatherTemperature celsius={props.data.temperature} />

        <div className="weatherIcon">
          <WeatherIcon code={props.data.icon} size={110} />
        </div>

        <h5 className="description">{props.data.description}</h5>

        <div className="city">{props.data.city}</div>

        <h3 className="date">
          <FormattedDate data={props.data.date} />
        </h3>
      </div>
      <div className="details">
        <div className="row">
          <div className="col">
            <div>
              <div className="humidityWrapper">
                <p className="humidity">{Math.round(props.data.humidity)}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div>
              <div className="windWrapper">
                <p className="wind">{Math.round(props.data.wind)} km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
