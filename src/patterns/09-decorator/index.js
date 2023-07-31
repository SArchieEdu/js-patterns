class Additional {
  price

  constructor(coffee = null) {
    this.coffePrice = coffee ? coffee.getPrice() : 0
  }

  getPrice () {
    return this.price + this.coffePrice
  }
}

export class Milk extends Additional {
  price = 2

  getPrice () {
    return super.getPrice()
  }
}

export class Sugar extends Additional {
  price = 1

  getPrice () {
    return super.getPrice()
  }
}

export class Coffee {
  price = 5

  getPrice () {
    return this.price
  }
}

