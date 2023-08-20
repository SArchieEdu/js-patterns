export class Child {
  constructor(value) {
    this.value = value;
  }

  getSum() {
    return this.value;
  }
}

export class Parent {
  constructor(values = []) {
    this.values = values;
  }

  getSum() {
    return this.values.reduce((acc, value) => acc + value.getSum(), 0);
  }
}
