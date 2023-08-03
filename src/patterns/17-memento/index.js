class Memento {
  constructor(state) {
    this.state = state
  }

  getState() {
    return this.state
  }
}

export class History {
  snapshots = []
}

export class Hero {
  #name = ''

  #state = {
    level: 1,
    skills: [],
  };

  constructor(name = '', history = {}) {
    this.#name = name
    this.history = history
  }

  get state () {
    return this.#state
  }

  addSkill (skill) {
    this.#state.skills.push(skill)
  }

  increaseLevel () {
    this.#state.level += 1
  }

  load (snapshot = {}) {
    this.#state = snapshot.getState()
  }

  save () {
    return new Memento({
      ...this.state,
      skills: [...this.state.skills]
    })
  }
}


