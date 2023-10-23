import React, {useEffect, useRef} from "react";
import {useState} from "react";
//이미지 호출하는법 다시 확인하기.
import clear from "../assets/clear.png";
import mist from "../assets/mist.png";
import cloud from "../assets/cloud.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";


function WeatherBox({weather, container}) {
    const [imagePath, setImagePath] = useState("");
    const weatherBox =useRef();
    const weatherDetail = useRef();

    useEffect(() => {
        container.current.style = 'height:590px;'
        weatherBox.current.style = '';
        weatherDetail.current.style = '';
        const currentWhether = weather.weather[0].main;

        switch (currentWhether) {
            case 'Clear':
                setImagePath(clear);
                break;
            case 'Rain':
                setImagePath(rain);
                break;
            case 'Snow':
                setImagePath(snow);
                break;
            case 'Clouds':
                setImagePath(cloud);
                break;
            case 'Haze':
                setImagePath(mist);
                break;

            default:
                setImagePath('');

        }

    }, [weather])

    console.log(imagePath)

    return (
        <>
            <div className="weather-box fadeIn" ref={weatherBox}>
                <img src={imagePath} />
                    <p className="temperature">{weather.main.temp}</p>
                    <p className="description">{weather.weather[0].description}</p>
            </div>

            <div className="weather-details fadeIn" ref={weatherDetail}>
                <div className="humidity">
                    <i className="fa-solid fa-water"></i>
                    <div className="text">
                        <span>{weather.main.humidity}%</span>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className="wind">
                    <i className="fa-solid fa-wind"></i>
                    <div className="text">
                        <span>{weather.wind.speed}</span>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WeatherBox;
