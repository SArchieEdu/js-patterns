export class Club {
  speed = 0.5;
  damage = 20;
  attack (monster) {
    return this.damage * this.speed - monster.armor;
  }
}

export class Sword {
  speed = 1;
  damage = 15;
  attack (monster) {
    return this.damage * this.speed - monster.armor;
  }
}

export class MagicWand {
  speed = 2;
  damage = 8;
  attack (monster) {
    return this.damage * this.speed - monster.armor;
  }
}

export class Hero {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  hit (monster) {
    return this.weapon.attack(monster);
  }
}

export class Monster {
  constructor(armor = 0) {
    this.armor = armor;
  }
}
