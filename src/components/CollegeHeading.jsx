import college from "../assets/college.png";
import PropTypes from "prop-types";

const CollegeHeading = ({ name, state, city }) => {
  return (
    <div className="flex flex-col">
      <div className="flex mb-4 gap-x-2">
        <div>
          <img className="h-12 w-12" src={college} alt="" />
        </div>
        <div className="flex flex-col gap-y-2">
          <div>
            <p className="text-sky-400 font-bold">{name}</p>
            <p className="text-sm">
              {city}, {state}
            </p>
          </div>
          <div className="flex flex-col border-l-4 border-orange-500 bg-orange-50 px-2">
            <p className="text-orange-500 font-bold">
              B. Tech. Computer Science Engineering
            </p>
            <p>JEE Advanced 2023 Cutoff - 144</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-orange-500 font-bold">
          <i className="bi bi-arrow-right font-bold"></i> Apply Now
        </p>
        <p className="text-sky-400 font-bold">
          <i className="bi bi-download"></i> Download brochure
        </p>
        <p className="flex gap-x-1 text-gray-600">
          <input type="checkbox" name="comparison" id={name} />
          Add to compare
        </p>
      </div>
    </div>
  );
};

CollegeHeading.propTypes = {
  name: PropTypes.string.isRequired, // Assuming fees is a number
  state: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default CollegeHeading;
