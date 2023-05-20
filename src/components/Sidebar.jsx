import { useContext } from "react";
import CurrentWeather from "./CurrentWeather";
import { WeatherContext } from "../context/WeatherContext";
import { formatLocalTime } from "../api/weatherApi";
import CurrentLoading from "./Loading/CurrentLoading";
import Search from "./Search";
const Sidebar = () => {
  const { weather, loading } = useContext(WeatherContext);
  return (
    <aside className="w-full lg:w-[40%] p-5 lg:p-10">
      <Search />
      <div className="my-2">
        {(weather && !loading) ? (
          <h4 className="text-center text-lg xl:text-2xl my-2">
            {formatLocalTime(
              weather?.dt,
              weather?.timezone,
              "hh:mm a, dd, LLL, yyyy"
            )}
          </h4>
        ) : (
          <h4 className="text-center text-lg xl:text-2xl my-2 text-gray-600 font-medium">
            Loading
          </h4>
        )}
        {(weather && !loading) ? <CurrentWeather /> : <CurrentLoading />}
      </div>
    </aside>
  );
};
export default Sidebar;