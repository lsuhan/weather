import React, {useEffect} from "react";
import {useState} from "react";

function WeatherBox({weather}) {
    const [imagePath, setImagePath] = useState("");


    useEffect(() => {
        const currentWhether = weather.weather[0].main;
        switch (currentWhether) {
            case 'Clear':
                setImagePath("../assets/clear.png");
                break;
            case 'Rain':
                setImagePath("/src/assets/rain.png");
                break;
            case 'Snow':
                setImagePath("/src/assets/snow.png");
                break;
            case 'Clouds':
                setImagePath("/src/assets/cloud.png");
                break;
            case 'Haze':
                setImagePath("/src/assets/mist.png");
                break;

            default:
                setImagePath('');

        }

    }, [weather])

    return (
        <>
            <div className="weather-box">
                <img src={imagePath} />
                    <p className="temperature"></p>
                    <p className="description"></p>
            </div>

            <div className="weather-details">
                <div className="humidity">
                    <i className="fa-solid fa-water"></i>
                    <div className="text">
                        <span></span>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className="wind">
                    <i className="fa-solid fa-wind"></i>
                    <div className="text">
                        <span></span>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WeatherBox;
