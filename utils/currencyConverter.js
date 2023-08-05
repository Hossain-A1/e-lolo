export const currencyConverter = (
  amount,
  
) => {
  return amount?.toLocaleString("en-US", {
    style: "currency",
    currency:"USD"
  });
};



