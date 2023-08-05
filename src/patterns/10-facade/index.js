export class Game {
  constructor({
    heroName = "Barbarian",
    locationName = "darkForest",
    monsters = ["demon", "demon", "undead"],
  } = {}) {
    this.heroName = heroName;
    this.locationName = locationName;
    this.monsters = monsters;
  }
  start() {
    this.hero = new Hero(this.heroName);
    this.location = new Location(this.locationName);
    this.monsters.forEach((monster) =>
      this.location.addMonster(new Monster(monster))
    );
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
