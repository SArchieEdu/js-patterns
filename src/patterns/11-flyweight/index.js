class Flyweight {
  constructor(sharedState) {
    this.sharedState = sharedState;
  }
}

export class ProductsStore {
  flyweights = {};
  products = [];

  addProduct (productData = {}) {
    const productFlyweight = this.getOrCreateFlyweight(productData.info);
    productData.info = productFlyweight;

    this.products.push(productData);
  }

  getOrCreateFlyweight (info = {}) {
    const key = Object.values(info).join("_");

    if (!Object.keys(this.flyweights).includes(key)) {
      this.flyweights[key] = new Flyweight(info);
    }

    return this.flyweights[key];
  }
}
