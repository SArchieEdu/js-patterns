class HotDrinksPot {
  algorithmSteps = {};
  constructor() {
    this.prepareRecipe();
  }
  prepareRecipe() {
    this.boilWater();
    this.brew();
    this.addCondiments();
    this.pourInCup();
  }
  boilWater() {
    this.algorithmSteps.boilWater = "Boiling water";
  }

  brew() {}

  addCondiments() {}

  pourInCup() {
    this.algorithmSteps.pourInCup = "Pouring into cup";
  }
}

// todo: make refactoring via template method pattern
export class TeaPot extends HotDrinksPot {
  brew() {
    this.algorithmSteps.brew = "Steeping the tea";
  }
  addCondiments() {
    this.algorithmSteps.addCondiments = "Adding Lemon";
  }
}

export class CoffeePot extends HotDrinksPot {
  brew() {
    this.algorithmSteps.brew = "Dripping Coffee through filter";
  }
  addCondiments() {
    this.algorithmSteps.addCondiments = "Adding Sugar and Milk";
  }
}
