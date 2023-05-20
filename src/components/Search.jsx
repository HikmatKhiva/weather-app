import { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { searchIcon } from "../assets";
const Search = () => {
  const [searchText, setSearchText] = useState({ q: '' })
  const { fetchWeather } = useContext(WeatherContext);
  const handleOnKeyDown = (e) => e.key === "Enter" && fetchWeather(searchText);
  return (
    <div className="flex items-center gap-2 w-full flex-wrap lg:flex-nowrap justify-center lg:justify-start">
      <h2 className="text-lg lg:text-xl xl:text-2xl">Your city</h2>
      <div className="flex items-center gap-2">
        <input
          id="search"
          type="text"
          value={searchText.q}
          onChange={e => setSearchText({ q: e.target.value })}
          onKeyDown={handleOnKeyDown}
          className="flex-grow border p-1 rounded-md outline-none capitalize px-2 focus:border-blue-500"
        />
        <img
          onClick={() => fetchWeather(searchText)}
          className="w-8 hover:scale-110 transition duration-300 cursor-pointer"
          src={searchIcon}
          alt="search"
        />
      </div>
    </div>
  );
};
export default Search;