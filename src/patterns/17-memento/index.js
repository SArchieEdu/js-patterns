// Непонятно для чего здесь класс Memento, раз нам не важно реализация состояния класса Hero,
// то можно просто хранить состояние как строку. 
export class Memento {
  // todo: add implementation
}

export class History {
  snapshots = [];

  save (snapshot) {
    return (this.snapshots.push(snapshot) - 1);
  }
  
  restore (key) {
    if (this.snapshots[key]) {
      return this.snapshots[key];
    }
  }
}

export class Hero {
  #name = '';

  #state = {
    level: 1,
    skills: [],
  };

  constructor(name = '', history = {}) {
    this.#name = name;
    this.history = history;
  }

  get state () {
    return this.#state;
  }

  addSkill (skill) {
    this.#state.skills.push(skill);
  }

  increaseLevel () {
    this.#state.level += 1;
  }

  load (snapshot) {
    const rawState = this.history.restore(snapshot);
    if (rawState) {
      const state = JSON.parse(rawState);
      this.#state = state;
    }
  }

  save () {
    return this.history.save(JSON.stringify(this.#state));
  }
}
