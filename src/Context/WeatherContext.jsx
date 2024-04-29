import React, { createContext, useState } from "react";
import { getByCity, getByLocation } from "../Api/apiCalls";

export const WeatherContext = createContext(null);

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState("");

    const fetchByCity = async () => {
        const response = await getByCity(searchCity);
        setData(response);
    }

    const fetchByLocation = async () => {
        navigator.geolocation.getCurrentPosition(async position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const response = await getByLocation(lat,lon);
            setData(response);
        })
    }

    return (
        <WeatherContext.Provider value={{searchCity,setSearchCity,data,setData,fetchByCity,fetchByLocation}}>{props.children}</WeatherContext.Provider>
    );

}