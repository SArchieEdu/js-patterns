export class Milk {
  price = 2;

  constructor(coffee) {
    this.coffee = coffee;
  }

  getPrice() {
    return this.coffee.getPrice() + this.price;
  }
}

export class Sugar {
  price = 1;

  constructor(coffee) {
    this.coffee = coffee;
  }

  getPrice() {
    return this.coffee.getPrice() + this.price;
  }
}

export class Coffee {
  price = 5;

  getPrice () {
    return this.price;
  }
}

