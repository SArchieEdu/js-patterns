export class RedColorsPallet {
  constructor () {
    this.color = 'red';
  }
}

export class GreenColorsPallet {
  constructor () {
    this.color = 'green';
  }
}

export class Notification {
  constructor (name, colorsPallet) {
    this.name = name;
    this.colorsPallet = colorsPallet;
  }

  toString () {
    return `This is ${this.name} notification with ${this.colorsPallet.color} colors pallet`;
  }
}

