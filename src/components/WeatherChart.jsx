import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
const WeatherChart = () => {
  // const { weather, loading } = useContext(WeatherContext);
  const { weather } = useContext(WeatherContext);
  return (
    <>
      {/* <h2 className="text-2xl text-gray-600 font-medium">
        {loading ? "Loading" : "Hourly"}
      </h2> */}
      <ResponsiveContainer width="100%" height={150}>
        <AreaChart
          data={weather?.hourly}
          margin={{ top: 20, right: 30, left: 25, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="temp"
            stroke="#60a5fa"
            fillOpacity={1}
            fill="url(#colorUv)"
            label={{
              fill: "black",
              fontSize: 15,
              position: "top",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};
export default WeatherChart;