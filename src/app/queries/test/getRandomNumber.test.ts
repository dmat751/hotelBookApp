import { getRandomNumber } from '../getRandomNumber';

describe('test getRandomNumber function', () => {
  it('test min and max args with mock', () => {
    //given
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5429541808037164);

    //when
    const randomDigit = getRandomNumber(0, 5);

    //then
    jest.spyOn(global.Math, 'random').mockRestore();
    expect(randomDigit).toBe(3);
  });

  it('test min and max args', () => {
    //given
    //when
    for (let i = 0; i < 20; i++) {
      const randomDigit = getRandomNumber(0, 1);

      //then
      expect(randomDigit).toBeGreaterThanOrEqual(0);
      expect(randomDigit).toBeLessThanOrEqual(1);
    }
  });

  it('test min as max and max as min args', () => {
    //given
    //when
    for (let i = 0; i < 20; i++) {
      const randomDigit = getRandomNumber(-1, -2);

      //then
      expect(randomDigit).toBeGreaterThanOrEqual(-2);
      expect(randomDigit).toBeLessThanOrEqual(-1);
    }
  });

  it('test randomization of numbers', () => {
    //given
    let randomDigit1;
    let randomDigit2;
    let counter = 0;

    //when
    do {
      randomDigit1 = getRandomNumber(0, 999999999);
      randomDigit2 = getRandomNumber(0, 999999999);
      if (counter === 20) {
        break;
      }
      counter++;
    } while (randomDigit1 === randomDigit2);

    //then
    expect(randomDigit1 === randomDigit2).toBeFalsy();
  });

  it('should return min when min and max is the same', () => {
    //given
    //when
    //then
    expect(getRandomNumber(10, 10)).toBe(10);
  });
});
