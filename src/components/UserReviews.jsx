import PropTypes from "prop-types";

const UserReviews = ({ userRating, basedOnUser, bestIn }) => {
  const bestInArray = ["Social Life", "Infrastructure"];
  return (
    <div className="flex flex-col items-start gap-y-2">
      <div className="flex items-center gap-x-2">
        <p className="h-2 w-2 bg-orange-500 rounded-full"></p>
        <p>{userRating}/10</p>
      </div>
      <div className="flex flex-col">
        <p className="text-sm text-gray-600">Based on {basedOnUser} User</p>
        <p className="text-sm text-gray-600">Reviews</p>
      </div>
      <div className="bg-red-50 text-red-400 rounded-2xl py-1 px-2">
        <p className="text-sm">
          <i className="bi bi-check2"></i> Best in {bestInArray[bestIn]}
          <i className="bi bi-chevron-down"></i>
        </p>
      </div>
    </div>
  );
};
UserReviews.propTypes = {
  userRating: PropTypes.number.isRequired, // Assuming fees is a number
  basedOnUser: PropTypes.number.isRequired,
  bestIn: PropTypes.number.isRequired,
};

export default UserReviews;
