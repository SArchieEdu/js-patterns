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
  constructor (type, colorsPallet) {
    this.name = type;
    this.colorsPallet = colorsPallet;
  }

  toString () {
    return `This is ${this.name} notification with ${this.colorsPallet.color} colors pallet`;
  }
}

