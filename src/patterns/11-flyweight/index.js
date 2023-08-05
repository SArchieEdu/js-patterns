class Flyweight {
  constructor(info) {
    this.name = info.name;
    this.country = info.country;
    this.color = info.color;
  }
}

export class ProductsStore {
  flyweights = {};
  products = [];

  #createKey(info = {}) {
    return Object.values(info).join("-");
  }

  addProduct(productData = {}) {
    const productFlyweight = this.getOrCreateFlyweight(productData.info);

    this.products.push({ ...productData, info: productFlyweight });
  }

  getOrCreateFlyweight(info = {}) {
    const key = this.#createKey(info);
    if (!this.flyweights[key]) {
      this.flyweights[key] = new Flyweight(info);
    }

    return this.flyweights[key];
  }
}
