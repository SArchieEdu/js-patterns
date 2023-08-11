class Flyweight {
  constructor(name, country, color) {
    this.name = name;
    this.country = country;
    this.color = color;
  }
}

export class ProductsStore {
  flyweights = {};
  products = [];

  addProduct (productData = {}) {
    const productFlyweight = this.getOrCreateFlyweight(productData.info);

    this.products.push({
      ...productData,
      info: productFlyweight,
    });
  }

  getOrCreateFlyweight (info = {}) {
    const flyweightKey = `${info.name}${info.country}${info.color}`;
    if (!this.flyweights[flyweightKey]) {
      this.flyweights[flyweightKey] = info;
    }
    
    return this.flyweights[flyweightKey];
  }
}
