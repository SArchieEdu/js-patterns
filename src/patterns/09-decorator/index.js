/* 
//Base
export class Milk {
  price = 2;

  constructor(coffee = {}) {
    this.coffee = coffee;
  }

  getPrice() {
    return this.coffee.getPrice() + this.price;
  }
}

export class Sugar {
  price = 1;

  constructor(coffee = {}) {
    this.coffee = coffee;
  }

  getPrice() {
    return this.coffee.getPrice() + this.price;
  }
}

export class Coffee {
  price = 5;

  getPrice() {
    return this.price;
  }
} */

/* abstract */ class Additives {
  price = 0;

  constructor(coffee = {}) {
    this.coffee = coffee;
  }

  getPrice() {
    return this.coffee.getPrice() + this.price;
  }
}

export class Milk extends Additives {
  price = 2;
}

export class Sugar extends Additives {
  price = 1;
}

export class Coffee {
  price = 5;

  getPrice() {
    return this.price;
  }
}
