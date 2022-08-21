import { StarOptions } from './../types/star';

const starsStateBuilder = (
  activeStarsAmount: number,
  maxStarsAmount: number,
  starActiveColor: StarOptions,
  starInactiveColor: StarOptions
): StarOptions[] => {
  let starsState: StarOptions[] = [];
  for (let i = 1; i <= maxStarsAmount; i++) {
    i <= activeStarsAmount
      ? starsState.push(starActiveColor)
      : starsState.push(starInactiveColor);
  }
  return starsState;
};

type Props = Readonly<{
  activeStarAmount: number;
  maxStarAmount: number;
  starColor1: string;
  starColor2: string;
}>;
export const useStarsStateBuilder = ({
  activeStarAmount,
  maxStarAmount,
  starColor1,
  starColor2,
}: Props) => {
  const starActiveColor: StarOptions = {
    borderColor: starColor1,
    fillColor: starColor1,
  };

  const starInactiveColor: StarOptions = {
    borderColor: starColor1,
    fillColor: starColor2,
  };

  return starsStateBuilder(
    activeStarAmount,
    maxStarAmount,
    starActiveColor,
    starInactiveColor
  );
};
