class Monster {
  settings = {};
  constructor(settings) {
    this.settings = settings;
  }
}

export default class Location {
  monsters = [];

  constructor(name = "", monstersCount = 0, monstersSettings = {}) {
    this.name = name;
    this.monstersCount = monstersCount;
    this.monstersSettings = monstersSettings;
    this.initMonsters();
  }

  initMonsters() {
    this.monsters = Array.from(Array(this.monstersCount), () => {
      return new Monster(this.monstersSettings);
    });
  }

  clone() {
    return new Location(this.name, this.monstersCount, {
      ...this.monstersSettings,
    });
  }
}
