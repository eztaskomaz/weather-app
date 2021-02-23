const WeatherBox = ({weather}) => {
    return (
        <div className="weather-box">
            <div className="temp">
                {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather">{weather.weather[0].main}</div>
        </div>
    );
}

export default WeatherBox;