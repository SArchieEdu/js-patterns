class HotDrinksPot {
  algorithmSteps = {};
  constructor() {
    this.prepareRecipe();
  }
  prepareRecipe () {
    throw new Error('need to implement')
  }
}

// todo: make refactoring via template method pattern
export class TeaPot extends HotDrinksPot {
  prepareRecipe () {
    this.boilWater();
    this.brewTea();
    this.pourInCup();
    this.addLemon();
  }

  boilWater ()  {
    this.algorithmSteps.boilWater = 'Boiling water';
  }

  brewTea () {
    this.algorithmSteps.brewTea = 'Steeping the tea';
  }

  pourInCup () {
    this.algorithmSteps.pourInCup = 'Pouring into cup';
  }

  addLemon () {
    this.algorithmSteps.addLemon = 'Adding Lemon';
  }
}

export class CoffeePot extends HotDrinksPot {
  prepareRecipe () {
    this.boilWater();
    this.brewCoffee();
    this.pourInCup();
    this.addSugarAndMilk();
  }

  boilWater ()  {
    this.algorithmSteps.boilWater = 'Boiling water';
  }

  brewCoffee () {
    this.algorithmSteps.brewCoffee = 'Dripping Coffee through filter';
  }

  pourInCup () {
    this.algorithmSteps.pourInCup = 'Pouring into cup';
  }

  addSugarAndMilk () {
    this.algorithmSteps.addSugarAndMilk = 'Adding Sugar and Milk';
  }
}
