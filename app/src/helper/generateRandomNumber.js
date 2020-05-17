export const generateRandomNumber = (minInt, maxInt) => {
  const min = Math.ceil(minInt);
  const max = Math.floor(maxInt);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};
