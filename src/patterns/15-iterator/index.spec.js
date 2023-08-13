import { Range } from './index.js'

describe('patterns/iterator', () => {
  it('should be able to return the range of numbers', () => {
    expect(new Range(1, 3).getRange()).toEqual([1, 2, 3])
    expect(new Range(9, 15).getRange()).toEqual([9, 10, 11, 12, 13, 14, 15])
  });

  it('should be able to call the callback function for each item of the range array', () => {
    const cb = jest.fn()
    const range = new Range(2, 4)

    range.forEach(cb)

    expect(cb).toHaveBeenCalledWith(2)
    expect(cb).toHaveBeenCalledWith(3)
    expect(cb).toHaveBeenCalledWith(4)
  });
});

