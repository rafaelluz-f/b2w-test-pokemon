export const formatNumbersToPrice = (value, index) => {
  return "R$" + value.substring(0, index) + "," + value.substring(index);
};
