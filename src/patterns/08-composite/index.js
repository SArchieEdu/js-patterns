export class Child {
  constructor(value) {
    this.value = value;
  }

  getSum () {
    return this.value;
  }
}

export class Parent {
  constructor(values = []) {
    this.values = values;
  }

  getSum () {
    return this.values.reduce((sum, elem) => sum + elem.getSum(), 0)
  }
}

