export class Game {
  start() {
    this.hero = new Hero('Barbarian');
    this.location = new Location('darkForest');

    this.location.addMonster(new Monster('demon'));
    this.location.addMonster(new Monster('demon'));
    this.location.addMonster(new Monster('undead'));
  }
}

class Location {
  monsters = [];

  constructor(name = '') {
    this.name = name;
  }

  addMonster(monster = {}) {
    this.monsters.push(monster);
  }
}

export class Hero {
  constructor(name = '') {
    this.name = name;
  }
}

export class Monster {
  constructor(type = '') {
    this.type = type;
  }
}
