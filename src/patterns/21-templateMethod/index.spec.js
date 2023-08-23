import { TeaPot, CoffeePot } from './index.js';

describe('patterns/templateMethod', () => {
  it('should be able to make coffee', () => {
    const coffeePot = new CoffeePot();

    coffeePot.prepareRecipe();

    expect(coffeePot.algorithmSteps.addSugarAndMilk).toBe('Adding Sugar and Milk');
    expect(coffeePot.algorithmSteps.brewCoffee).toBe('Dripping Coffee through filter');
  });

  it('should be able to make tea', () => {
    const teaPot = new TeaPot();

    teaPot.prepareRecipe();

    expect(teaPot.algorithmSteps.addLemon).toBe('Adding Lemon');
    expect(teaPot.algorithmSteps.brewTea).toBe('Steeping the tea');
  });
});
