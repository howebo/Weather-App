import React, { useContext } from "react";
import { WeatherContext } from "../Context/WeatherContext";

const Button = (props) => {
    const weather = useContext(WeatherContext);
    return (
        <button className="button-4" role="button" onClick={(e) => weather.fetchByCity()}>{props.title}</button>
    );
}

export default Button;