class Monster {
  settings = {};
  constructor(monsterSettings) {
    this.settings = monsterSettings;
  }
}

export default class Location {
  monsters = [];
  monstersSettings = {};

  constructor(name = '', monstersCount = 0, monstersSettings = {}) {
    this.name = name;
    Object.assign(this.monstersSettings, monstersSettings);
    this.initMonsters(monstersCount);
  }

  initMonsters(monstersCount) {
    for(let i = 0; i< monstersCount; i++){
      this.monsters.push(new Monster(this.monstersSettings));
    }
  }

  clone () {
    return new Location(this.name, this.monsters.length, this.monstersSettings);
  }
}
