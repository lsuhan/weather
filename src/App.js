import './App.css';
import SearchBox from "./components/SearchBox";
import {useState, useRef, useEffect} from "react";
import NotFoundPage from "./components/error/404";
import WeatherBox from "./components/WeatherBox";

const apiKey = "16048450580f653b384b96a107dd3f4d";

function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");

    const container = useRef();

    const onChange = (e) => {
        setCity(e.target.value);
    }

    const search = () => {
        if(city === "") return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
            .then(response => response.json())
            .then(json => {
                setWeather(json);
            })
    }

  return (
    <div className="container" ref={container}>
        <SearchBox
            onClick={search}
            onChange={onChange}
            city={city}
        >
        </SearchBox>

        {
            weather === ""? null : weather.cod === "404" ? <NotFoundPage container={container} /> : <WeatherBox weather={weather} container={container}/>
        }

    </div>
  );
}

export default App;
