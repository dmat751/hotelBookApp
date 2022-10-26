export const getRandomNumber = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return min === max ? min : Math.round(Math.random() * (max - min)) + min;
};
