class Monster {
  constructor(settings) {
    this.settings = settings;
  }
}

export default class Location {
  monsters = [];

  constructor(name = '', monstersCount = 0, monstersSettings = {}) {
    this.name = name;
    this.monstersCount = monstersCount;
    this.monstersSettings = monstersSettings;

    this.initMonsters();
  }

  initMonsters () {
    for (let i = this.monstersCount; i > 0; i--) {
      this.monsters.push(new Monster(this.monstersSettings));
    }
  }

  clone () {
    return new Location({ ...this });
  }
}
