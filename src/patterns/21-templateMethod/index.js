class HotDrinksPot {
  constructor() {
    this.algorithmSteps = {};
    this.prepareRecipe();
  }

  prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }
}

export class TeaPot extends HotDrinksPot {
  constructor() {
    super();
  }

  boilWater ()  {
    this.algorithmSteps.boilWater = 'Boiling water';
  }

  brew () {
    this.algorithmSteps.brew = 'Steeping the tea';
  }

  pourInCup () {
    this.algorithmSteps.pourInCup = 'Pouring into cup';
  }

  addCondiments () {
    this.algorithmSteps.addCondiments = 'Adding Lemon';
  }
}

export class CoffeePot extends HotDrinksPot {
  constructor() {
    super();
  }

  boilWater ()  {
    this.algorithmSteps.boilWater = 'Boiling water';
  }

  brew () {
    this.algorithmSteps.brew = 'Dripping Coffee through filter';
  }

  pourInCup () {
    this.algorithmSteps.pourInCup = 'Pouring into cup';
  }

  addCondiments () {
    this.algorithmSteps.addCondiments = 'Adding Sugar and Milk';
  }
}
