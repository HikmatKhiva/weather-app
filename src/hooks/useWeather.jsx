import { useState } from "react";
import { getWeatherData } from "../api/weatherApi";
import { toast } from "react-toastify";
const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchWeather = (location) => {
    if (!location.q.length) {
      setLoading(true);
      toast.error("Input mustn't be empty.");
    }
    getWeatherData(location)
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.message) {
          return toast.error("Location not found");
        }
        setLoading(true);
      });
  };
  return { weather, fetchWeather, loading };
};
export default useWeather;