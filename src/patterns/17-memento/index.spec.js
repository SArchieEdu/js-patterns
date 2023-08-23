import { Hero, History } from './index.js';

describe('patterns/memento', () => {
  let history;
  let hero;

  beforeEach(() => {
    history = new History();
    hero = new Hero('Superman', history);
  });

  afterEach(() => {
    history = null;
    hero = null;
  });

  it('should be able to store the object state', () => {
    const snapshot1 = hero.save();

    hero.addSkill('fly');
    hero.increaseLevel();

    expect(hero.state.skills.includes('fly')).toBeTruthy();
    expect(hero.state.level).toBe(2);

    hero.load(snapshot1);

    expect(hero.state.skills.includes('fly')).toBeFalsy();
    expect(hero.state.level).toBe(1);
  });
});
