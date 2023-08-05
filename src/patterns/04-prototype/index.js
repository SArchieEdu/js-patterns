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
  }

  get monstersSettings() {
    return this._settings;
  }

  set monstersSettings(value) {
    this._settings = value;
    this.initMonsters();
  }

  initMonsters () {
    const newMonsters = [];
    for(let i = 0; i < this.monstersCount; i++) {
      newMonsters.push(new Monster(this._settings));
    }
    this.monsters = newMonsters;
  }

  clone () {
    return new Location(this.name, this.monstersCount, { ...this._settings });
  }
}
