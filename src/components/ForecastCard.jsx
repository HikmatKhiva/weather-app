import PropTypes from "prop-types";
import { urlIcon } from "../api/weatherApi";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
const ForecastCard = ({ day, index }) => {
  return (
    <motion.div
      variants={fadeIn(index * 0.2, 1)}
      className="w-[50%] lg:w-[25%] flex flex-col items-center forecast rounded-md py-2 p-5"
    >
      <h3 className="text-sm lg:text-xl font-semibold">{day.title}</h3>
      <img
        className="w-20 lg:w-24 drop-shadow-xl"
        src={urlIcon(day.icon)}
        alt="weather-icon"
      />
      <h5 className="text-gray-300">Humidity</h5>
      <p>{day.humidity}%</p>
    </motion.div>
  );
};
ForecastCard.propTypes = {
  day: PropTypes.object,
  index: PropTypes.number,
};
export default ForecastCard;