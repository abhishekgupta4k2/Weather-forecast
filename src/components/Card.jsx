import React from "react";
import { useWeather } from "../context/Weather";

const Card = () => {
    const weather = useWeather();
    return (
        <div className="card" >
            <img src = {weather?.data?.current?.condition?.icon} alt="Weather" />
            <h5> {weather?.data?.current?.condition?.text} </h5>
            <h2> {weather.data?.current?.temp_c} C / {weather.data?.current?.temp_f} F </h2>
            <p> Humidity {weather?.data?.current?.humidity} </p>
            <h5> {weather?.data?.location?.name}, {weather.data?.location?.region}, {weather.data?.location?.country} </h5>
            <p> {weather.data?.location?.localtime} </p>
        </div>
    )
};

export default Card;