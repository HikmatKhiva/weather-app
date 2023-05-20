import { useContext } from "react";
import ForecastCard from "./ForecastCard";
import WeatherChart from "./WeatherChart";
import { WeatherContext } from "../context/WeatherContext";
import ForecastLoading from "./Loading/ForecastLoading";
import { motion } from "framer-motion";
import { container } from "../utils/motion";
const Main = () => {
  const { weather, loading } = useContext(WeatherContext);
  return (
    <main className="w-full lg:w-[60%] flex-grow lg:py-10 py-5 lg:px-5 flex flex-col justify-center ">
      {weather && <WeatherChart />}
      {/* <h2 className="text-2xl text-gray-600 font-medium">
        {(loading && !weather?.daily) ? "Loading" : "Daily"}
      </h2> */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex  px-3 flex-wrap"
      >
        {weather && !loading
          ? weather.daily?.map((day, i) => (
            <ForecastCard key={i} index={i} day={day} />
          ))
          : [1, 2, 3, 4].map((item, i) => (
            <ForecastLoading key={item} index={i} />
          ))}
      </motion.div>
    </main>
  );
};
export default Main;