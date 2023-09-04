export class Milk {
  price = 2;

  constructor (extra) {
    this.extra = extra;
  }

  getPrice () {
    return this.extra ? this.extra.getPrice() + this.price : this.price;
  }
}

export class Sugar {
  price = 1;

  // Смущает что получилось два одинаковых решения для Milk и для Sugar
  constructor (extra) {
    this.extra = extra;
  }

  getPrice () {
    return this.extra ? this.extra.getPrice() + this.price : this.price;
  }
}

export class Coffee {
  price = 5;

  getPrice () {
    return this.price;
  }
}

