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
    return this.values
      .map((value) => value.getSum())
      .reduce((acc, value) => acc + value, 0);
  }
}
