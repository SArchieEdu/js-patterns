export class RedColorsPalette {
  constructor () {
    this.color = 'red';
  }
}

export class GreenColorsPalette {
  constructor () {
    this.color = 'green';
  }
}

export class Notification {
  constructor (name, colorsPalette) {
    this.name = name;
    this.colorsPalette = colorsPalette;
  }

  toString () {
    return `This is ${this.name} notification with ${this.colorsPalette.color} colors palette`;
  }
}

