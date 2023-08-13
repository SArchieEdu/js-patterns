class Flyweight {
  constructor(info) {
    this.info = info
  }
}

export class ProductsStore {
  flyweights = {}
  products = []

  addProduct (productData = {}) {
    const productFlyweight = this.getOrCreateFlyweight(productData.info)
    this.products.push({
      ...productData,
      info: productFlyweight
    })
  }

  getOrCreateFlyweight (info = {}) {
    const { name, color } = info
    if (!this.flyweights[name + '_' + color]) {
      this.flyweights[name + '_' + color] =
          new Flyweight(info)
    }
    return this.flyweights[name + '_' + color]
  }
}
