import {Range} from './index.js';

describe('patterns/iterator', () => {
  it('should be able to throw an error when end is less than start', () => {
    expect(() => { new Range(3, 1).getRange() }).toThrow("Range's end param should be greater than the start param.");
  });

  it('should be able to return the range of numbers', () => {
    expect(new Range(1, 3).getRange()).toEqual([1, 2, 3]);
    expect(new Range(9, 15).getRange()).toEqual([9, 10, 11, 12, 13, 14, 15]);
  });

  it('should be able to call the callback function for each number of the range', () => {
    const fn = jest.fn();

    (new Range(2, 4)).forEach(fn);

    expect(fn).toHaveBeenCalledWith(2);
    expect(fn).toHaveBeenCalledWith(3);
    expect(fn).toHaveBeenCalledWith(4);
  });
});

