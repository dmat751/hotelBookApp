import { getRandomNumber } from '../getRandomNumber';

describe('test getRandomNumber function', () => {
  it('test min and max args with mock', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5429541808037164);
    const randomDigit = getRandomNumber(0, 5);
    expect(randomDigit).toBeGreaterThanOrEqual(0);
    expect(randomDigit).toBeLessThanOrEqual(5);
    expect(randomDigit).toBe(3);
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('test min and max args', () => {
    for (let i = 0; i < 20; i++) {
      const randomDigit = getRandomNumber(0, 1);
      expect(randomDigit).toBeGreaterThanOrEqual(0);
      expect(randomDigit).toBeLessThanOrEqual(1);
    }
  });

  it('test min as max and max as min args', () => {
    for (let i = 0; i < 20; i++) {
      const randomDigit = getRandomNumber(-1, -2);
      expect(randomDigit).toBeGreaterThanOrEqual(-2);
      expect(randomDigit).toBeLessThanOrEqual(-1);
    }
  });

  it('test randomization of numbers', () => {
    let randomDigit1;
    let randomDigit2;
    let counter = 0;
    do {
      randomDigit1 = getRandomNumber(0, 999999999);
      randomDigit2 = getRandomNumber(0, 999999999);
      if (counter === 20) {
        break;
      }
      counter++;
    } while (randomDigit1 === randomDigit2);
    expect(randomDigit1 === randomDigit2).toBeFalsy();
  });

  it('return -1 when min and max is the same', () => {
    expect(getRandomNumber(10, 10)).toBe(-1);
  });
});
