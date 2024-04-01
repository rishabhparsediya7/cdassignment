import college from "../data/college.json";
export const fetchList = (page) => {
  const rows = page * 10;
  return college.slice(0, rows);
};

export const sortData = async (list, checked, asc) => {
  const sortedData = list.sort((a, b) => {
    const key = checked ? "cd_rating" : "user_rating";
    const order = asc ? 1 : -1;

    if (a[key] < b[key]) return 1 * order;
    if (a[key] > b[key]) return -1 * order;
    return 0;
  });
  return sortedData;
};
