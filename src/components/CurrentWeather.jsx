import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { urlIcon } from "../api/weatherApi";
const CurrentWeather = () => {
  const { weather } = useContext(WeatherContext);
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <img
          className="w-24 lg:w-32 drop-shadow-md"
          src={urlIcon(weather?.weather[0]?.icon || "01d")}
          alt="weather-icon"
        />
        <h2 className="text-6xl font-semibold">
          {Math.floor(weather?.temp) || 0}°
        </h2>
      </div>
      <h3 className="text-center text-4xl font-semibold capitalize">
        {weather?.weather[0].description || "loading"}
      </h3>

      <div className="flex justify-between my-5 text-center">
        <div>
          <h3 className="text-xl text-zinc-300">Humidity</h3>
          <p>{weather?.humidity || 0}%</p>
        </div>
        <div>
          <h3 className="text-xl text-zinc-300">Wind speed</h3>
          <p>{weather?.speed || 0}km/h</p>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;