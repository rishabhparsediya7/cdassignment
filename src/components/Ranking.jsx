import PropTypes from "prop-types";

const Ranking = ({ ranking, outOf, platform }) => {
  const supArray = ["st", "nd", "rd"];
  const value = Math.floor(ranking % 10);
  let sup = "";
  if (value == 1 || value == 2 || value == 3) {
    sup = supArray[value - 1];
  } else {
    sup = "th";
  }
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-col">
        <p>
          #{ranking}
          <sup>{sup}</sup>/<strong className="text-orange-500">{outOf}</strong>{" "}
          in India
        </p>
        <p>{platform}</p>
      </div>
      <div className="flex p-2 bg-sky-100 max-w-40 space-x-2 rounded-r-2xl items-center h-10 border-l-4 border-sky-500">
        <div className="flex">
          <p className="h-4 w-4 rounded-full bg-gray-500"></p>
          <p className="h-4 w-4 rounded-full border border-white -ml-2 bg-gray-500"></p>
          <p className="h-4 w-4 rounded-full border border-white -ml-2 bg-gray-500"></p>
        </div>
        <div>
          <p className="text-sky-600">
            + 9 more <i className="bi bi-chevron-down font-bold"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

Ranking.propTypes = {
  ranking: PropTypes.number.isRequired, // Assuming fees is a number
  outOf: PropTypes.number.isRequired,
  platform: PropTypes.string.isRequired,
};

export default Ranking;
