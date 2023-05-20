import { Main, Sidebar } from "./components";
import { WeatherContext } from "./context/WeatherContext";
import { ToastContainer } from "react-toastify";
import useWeather from "./hooks/useWeather";
function App() {
  const { weather, fetchWeather, loading } = useWeather();
  return (
    <WeatherContext.Provider value={{ weather, loading, fetchWeather }}>
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex flex-wrap w-[90%]  lg:w-[992px] xl:w-[1000px] 2xl:w-[1200px] shadow rounded-lg border">
          <Sidebar />
          <Main />
        </div>
      </div>
      <ToastContainer />
    </WeatherContext.Provider>
  );
}
export default App;