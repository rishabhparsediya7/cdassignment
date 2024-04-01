export const converter = (price) => {
  let IndianRupee = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  return IndianRupee.format(price);
};
