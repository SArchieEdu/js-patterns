export class Game {
  constructor({
    heroName = "Barbarian",
    locationName = "darkForest",
    monsters = ["demon", "demon", "undead"],
  } = {}) {
    this.hero = new Hero(heroName);
    this.location = new Location(locationName);
    this.monsters = monsters.map((monster) => new Monster(monster));
  }
  start() {
    this.monsters.forEach((monster) => this.location.addMonster(monster));
  }
}

class Location {
  monsters = [];

  constructor(name = "") {
    this.name = name;
  }

  addMonster(monster = {}) {
    this.monsters.push(monster);
  }
}

export class Hero {
  constructor(name = "") {
    this.name = name;
  }
}

export class Monster {
  constructor(type = "") {
    this.type = type;
  }
}
