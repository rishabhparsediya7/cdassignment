import { converter } from "../functions/currency";
import PropTypes from "prop-types";

const Package = ({ average, highest }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-col">
        <p className="text-teal-500 font-bold">{converter(average)}</p>
        <p className="text-gray-600 text-px font-semibold">Average Package</p>
      </div>
      <div className="flex flex-col">
        <p className="text-teal-500 font-bold">{converter(highest)}</p>
        <p className="text-gray-600 text-px font-semibold">Highest Package</p>
      </div>
      <p className="text-orange-500 font-bold">
        <i className="bi bi-arrow-left-right"></i> Compare Placement
      </p>
    </div>
  );
};

Package.propTypes = {
  average: PropTypes.number.isRequired, // Assuming fees is a number
  highest: PropTypes.number.isRequired,
};
export default Package;
