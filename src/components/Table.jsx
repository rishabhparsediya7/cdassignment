import CollegeHeading from "./CollegeHeading";
import Fees from "./Fees";
import Package from "./Package";
import Ranking from "./Ranking";
import UserReviews from "./UserReviews";
import college from "../data/college.json";
import { useEffect, useState } from "react";
import { fetchList, sortData } from "../services/service";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
const Table = () => {
  const [collegeList, setCollegeList] = useState(college.slice(0, 10));
  const [checked, setChecked] = useState(true);
  const [asc, setAsc] = useState(true);
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await fetchList(page);
        setCollegeList(list);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [page]);

  // search college by name
  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    const tempList = fetchList(page);
    const filtered = tempList.filter((college) => {
      return college.name.toLowerCase().startsWith(value.toLowerCase());
    });
    setCollegeList(filtered);
  };
  const handleChecked = async (e) => {
    setChecked(e.target.value === "cdratings");
    const list = await sortData(collegeList, checked, asc);
    setCollegeList(list);
  };

  const handleSort = async (e) => {
    setAsc(e.target.value === "ascending");
    const list = await sortData(collegeList, checked, asc);
    setCollegeList(list);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex gap-x-2 w-full">
        <input
          value={name}
          onChange={(e) => handleChange(e)}
          placeholder="Search the college"
          className="bg-sky-50 w-[20rem] border-b-2 outline-none text-gray-800 border-sky-600 rounded-md p-2"
          type="text"
        />
        <div className="radio-inputs">
          <label className="radio">
            <input
              type="radio"
              name="radio"
              value="cdratings"
              checked={checked}
              onChange={(e) => handleChecked(e)}
            />
            <span className="name">CD Rating</span>
          </label>
          <label className="radio">
            <input
              type="radio"
              name="radio"
              value="userreview"
              checked={!checked}
              onChange={(e) => handleChecked(e)}
            />
            <span className="name">User Rating</span>
          </label>
        </div>
        <div className="radio-inputs2">
          <label className="radio">
            <input
              type="radio"
              name="radio2"
              value="ascending"
              checked={asc}
              onChange={(e) => handleSort(e)}
            />
            <span className="name2">Ratings low first</span>
          </label>
          <label className="radio">
            <input
              type="radio"
              name="radio2"
              value="descending"
              checked={!asc}
              onChange={(e) => handleSort(e)}
            />
            <span className="name2">Ratings high first</span>
          </label>
        </div>
      </div>
      <InfiniteScroll
        dataLength={collegeList.length}
        next={loadMore}
        hasMore={collegeList.length < 100}
        loader={<Loader />}
      >
        <table className="w-full table-auto border border-black">
          <thead className="bg-sky-900/50 text-white text-left">
            <tr className="">
              <th className="border border-gray-200 pl-2 py-2">CD Rank</th>
              <th className="border border-gray-200 pl-2">Colleges</th>
              <th className="border border-gray-200 pl-2">Course Fees</th>
              <th className="border border-gray-200 pl-2">Placement</th>
              <th className="border border-gray-200 pl-2">User Reviews</th>
              <th className="border border-gray-200 pl-2">Rankings</th>
            </tr>
          </thead>
          <tbody>
            {collegeList.map((college, index) => (
              <tr key={index} className="relative">
                <td className="border border-gray-200 p-2">
                  <p className="absolute top-0 font-bold">
                    #{college.cd_rating}
                  </p>
                </td>
                {/* This is for college name column */}
                <td className="border border-gray-200 p-2">
                  <CollegeHeading
                    name={college.name}
                    state={college.state}
                    city={college.city}
                  />
                </td>
                {/* this is course fees */}
                <td className="border border-gray-200 p-2">
                  <Fees fees={college.fees} />
                </td>
                {/* this is for package */}
                <td className="border border-gray-200 p-3">
                  <Package
                    average={college.avg_package}
                    highest={college.highest_package}
                  />
                </td>
                {/* this is for User Reviews */}
                <td className="border border-gray-200 p-2">
                  <UserReviews
                    userRating={college.user_rating}
                    basedOnUser={college.based_on_user}
                    bestIn={college.best_in}
                  />
                </td>
                {/* this is for Ranking */}
                <td className="border border-gray-200 p-2">
                  <Ranking
                    ranking={college.ranking}
                    outOf={college.ranking + Math.floor(Math.random() * 100)}
                    platform={college.platform}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/*<button onClick={loadMore}>Show more</button>*/}
      </InfiniteScroll>
    </div>
  );
};

export default Table;
