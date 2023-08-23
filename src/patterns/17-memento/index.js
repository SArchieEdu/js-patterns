export class Memento {
  constructor(name, state) {
    this.name = name;
    this.level = state.level;
    this.skills = [...state.skills];
  }
}

export class History {
  // todo: add implementation
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

  load (snapshot = {}) {
    this.#name = snapshot.name;
    this.#state = {
      level: snapshot.level,
      skills: [...snapshot.skills],
    };
  }

  save () {
    return new Memento(this.#name, this.#state)
  }
}
