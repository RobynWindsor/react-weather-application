import React, { useState } from "react";

export default function WeatherTemeprature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <h1 className="weatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit ">
          °C |{""}{" "}
          <a className="fahrenheit" href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </h1>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <h1 className="weatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit ">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          |°F
        </span>
      </h1>
    );
  }
}
