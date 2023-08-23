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

  addProduct (productData = {}) {
    const productFlyweight = this.getOrCreateFlyweight(productData.info);

    this.products.push({
      model: productData.model,
      info: productFlyweight
    });
  }

  getOrCreateFlyweight (info = {}) {
    const nameKey = ("" + info.name + info.country + info.color);

    if(!this.flyweights[nameKey]){
      this.flyweights[nameKey] = new Flyweight(info);
    }

    return this.flyweights[nameKey];
  }
}
