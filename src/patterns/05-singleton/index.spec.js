import Singleton from './index.js';

describe('patterns/singleton', () => {
  it('should return the same instance', () => {
    expect(new Singleton() === new Singleton()).toBeTruthy();
  });
});
