import { generateRandomNumber } from "./generateRandomNumber";
import { formatNumbersToPrice } from "./formatNumbersToPrice";

export const generateRandomPrice = () => {
  const number = generateRandomNumber(1000, 9999);
  const price = formatNumbersToPrice(number.toString(), 2);

  return price;
};
