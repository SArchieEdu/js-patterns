import { getArea, Adapter, Square, Rectangle } from './index.js';

describe('patterns/adapter', () => {
  it('should be able to calculate the shape area', () => {
    expect(getArea(new Rectangle(2, 3))).toBe(6);
    expect(getArea(new Adapter(new Square(10)))).toBe(100);
  });
});
