import './App.css';
import React, {useState} from "react";
import Searchbox from "./components/SearchBox";
import WeatherBox from "./components/WeatherBox";
import LocationBox from "./components/LocationBox";

const App = () => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = (evt) => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                });
        }
    }

    const api = {
        key: process.env.REACT_APP_KEY,
        base: 'https://api.openweathermap.org/data/2.5/'
    };

    const appBasedOnTemp = (typeof weather.main != "undefined")
        ? ((weather.main.temp > 16)
            ? 'App warm' : 'App')
        : 'App';

    return (
        <div className={appBasedOnTemp}>
            <main>
                <Searchbox search={search} setQuery={setQuery}/>
                {(typeof weather.main != "undefined") ? (
                    <div>
                        <LocationBox weather={weather}/>
                        <WeatherBox weather={weather}/>
                    </div>
                ) : ('')}
            </main>
        </div>
    );
}

export default App;
