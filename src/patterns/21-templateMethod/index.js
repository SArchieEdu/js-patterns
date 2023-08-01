class HotDrinksPot {
  algorithmSteps = {};

  constructor() {
    this.prepareRecipe();
  }

  prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  boilWater() { throw new Error("Implement"); }
  brew() { throw new Error("Implement"); }
  pourInCup() { throw new Error("Implement"); }
  addCondiments() { throw new Error("Implement"); }
}

export class TeaPot extends HotDrinksPot {
  boilWater() {
    this.algorithmSteps.boilWater = 'Boiling water';
  }

  brew() {
    this.algorithmSteps.brew = 'Steeping the tea';
  }

  pourInCup() {
    this.algorithmSteps.pourInCup = 'Pouring into cup';
  }

  addCondiments() {
    this.algorithmSteps.addCondiments = 'Adding Lemon';
  }
}

export class CoffeePot extends HotDrinksPot {
  boilWater() {
    this.algorithmSteps.boilWater = 'Boiling water';
  }

  brew() {
    this.algorithmSteps.brew = 'Dripping Coffee through filter';
  }

  pourInCup() {
    this.algorithmSteps.pourInCup = 'Pouring into cup';
  }

  addCondiments() {
    this.algorithmSteps.addCondiments = 'Adding Sugar and Milk';
  }
}
