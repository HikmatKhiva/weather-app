import { fadeIn } from "../../utils/motion";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
const ForecastLoading = ({ index }) => {
  return (
    <motion.div
      variants={fadeIn(index * 0.3, 1)}
      className="w-[50%] lg:w-[25%] flex flex-col items-center  rounded-md py-2 p-5"
    >
      <h3 className="text-sm lg:text-xl font-semibold"></h3>
      <div className="w-20 lg:w-24 h-20 lg:h-24 border rounded-full animate-spin border-t-transparent" />
      <h5 className="text-gray-300">Humidity</h5>
      <p>Loading</p>
    </motion.div>
  );
};
ForecastLoading.propTypes = {
  index: PropTypes.number,
};
export default ForecastLoading;
