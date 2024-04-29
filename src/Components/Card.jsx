import React, { useContext } from "react";
import { WeatherContext } from "../Context/WeatherContext";

const Card = () => {
  const weather = useContext(WeatherContext);
  return (
    <div className="card">
      <img src={weather.data?.current?.condition?.icon} alt="Weather icon" />
      <h4>{weather.data?.current?.temp_c}° C</h4>
      <h5>Humidity : {weather.data?.current?.humidity}</h5>
      <h5>Wind : {weather.data?.current?.wind_kph} Kph</h5>
      <h2>
        {weather.data?.location?.name},{weather.data?.location?.region},
        {weather.data?.location?.country}
      </h2>
    </div>
  );
};

export default Card;
