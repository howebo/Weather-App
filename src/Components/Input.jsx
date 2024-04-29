import React, { useContext } from "react";
import { WeatherContext } from "../Context/WeatherContext";

const Input = () => {
    const weather = useContext(WeatherContext);
    return (
        <input className="input-field" placeholder="Search" type="text" onChange={(e) => weather.setSearchCity(e.target.value)} />
    );
};


export default Input;