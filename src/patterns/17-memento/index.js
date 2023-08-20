export class Memento {
  #id = null;
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.#id = Number(new Date());
  }
  get id() {
    return this.#id;
  }
}

export class History {
  #snapshots = {};
  addSnapshot(snapshot = {}) {
    const momento = new Memento(snapshot);
    this.#snapshots[momento.id] = momento.snapshot;
    return momento.id;
  }
  restore(id) {
    return this.#snapshots[id];
  }
}

export class Hero {
  #name = "";

  #state = {
    level: 1,
    skills: [],
  };

  constructor(name = "", history = {}) {
    this.#name = name;
    this.history = history;
  }

  get state() {
    return this.#state;
  }

  #cloneState() {
    return { ...this.#state, skills: [...this.#state.skills] };
  }

  addSkill(skill) {
    this.#state.skills.push(skill);
  }

  increaseLevel() {
    this.#state.level += 1;
  }

  load(snapshot) {
    this.#state = this.history.restore(snapshot);
  }

  save() {
    return this.history.addSnapshot(this.#cloneState());
  }
}
