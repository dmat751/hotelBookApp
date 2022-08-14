export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return min === max ? -1 : Math.floor(Math.random() * (max - min)) + min;
};
