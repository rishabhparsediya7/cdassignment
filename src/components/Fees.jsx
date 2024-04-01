import { converter } from "../functions/currency";
import PropTypes from "prop-types";

const Fees = ({ fees }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-teal-500 font-bold">{converter(fees)}</p>
      <p className="text-gray-600 text-px font-semibold">BE / B. Tech</p>
      <p className="text-gray-600 text-px font-semibold">1st Year Fees</p>
      <p className="text-orange-500 font-bold">
        <i className="bi bi-arrow-left-right"></i> Compare Fees
      </p>
    </div>
  );
};
Fees.propTypes = {
  fees: PropTypes.number.isRequired, // Assuming fees is a number
};
export default Fees;
