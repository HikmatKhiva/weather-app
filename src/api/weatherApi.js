import { DateTime } from 'luxon'
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

/* format date time */
export const formatLocalTime = (secs = 0, zone, format = "cccc, dd LLL, yyyy' 'hh:mm a") => DateTime
    .fromSeconds(secs)
    .setZone(zone)
    .toFormat(format);
const weatherApiGet = (infoType, searchParams, units = 'metric') => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY, units });
    return fetch(url)
        .then(res => res.json())
        .catch(err => err.message);
}
/* get format current weather data */
const formatWeatherCurrent = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, humidity },
        name,
        dt,
        weather,
        wind: { speed },
    } = data
    return { lat, lon, dt, weather, speed, name, temp, humidity }
}
/* get format 4 days forecast data  */
const formatWeatherForecast = (data) => {
    let { timezone, daily, hourly } = data;
    daily = daily?.slice(0, 4).map(d => (
        {
            title: formatLocalTime(d.dt, timezone, 'dd LLL'),
            temp: Math.floor(d.temp.day),
            icon: d.weather[0].icon,
            humidity: d.humidity
        }
    ));
    hourly = hourly?.slice(0, 4).map(h => (
        {
            title: formatLocalTime(h.dt, timezone, 'hh:mm '),
            temp: `${Math.floor(h.temp)}`,
            icon: h.weather[0].icon
        }
    ));
    return { timezone, daily, hourly };
}

let optionOneCall = (lat = 41.3783, lon = 60.3639, units) => {
    return {
        lat, lon, exclude: "current,minutely,alerts", units
    }
}
/* get weathers data  */
export const getWeatherData = async (search = { q: 'khiva' }, units = "metric") => {
    if (search.q.length <= 0) return
    /* current data */
    const formatterCurrentWeather = await weatherApiGet("weather", search, units)
        .then(formatWeatherCurrent)
    const { lat, lon } = formatterCurrentWeather;
    /* daily and hourly data */
    let formatterForecastData;
    if (lat, lon) {
        formatterForecastData = await weatherApiGet("onecall", optionOneCall(lat, lon, units))
            .then(formatWeatherForecast)
    }
    return { ...formatterCurrentWeather, ...formatterForecastData };
}
/*  icon url  */
export const urlIcon = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;