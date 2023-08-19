// todo: make refactoring, use State pattern
class OldDigitalLock {
  state = {
    status: "locked",
    key: "",
  };

  constructor(key = "") {
    this.state.key = key;
  }

  toggle(combination = "") {
    if (this.state.status === "locked") {
      if (combination === this.state.key) {
        this.state.status = "unlocked";
      }
      return;
    }

    if (this.state.status === "unlocked") {
      if (combination) {
        this.state.key = combination;
      }

      this.state.status = "locked";
    }
  }
}

class State {
  digitalLock;
  constructor(digitalLock) {
    this.digitalLock = digitalLock;
  }
}

class Locked extends State {
  status = "locked";
  toggle(combination = "") {
    if (combination === this.digitalLock.key) {
      this.digitalLock.state = new Unlocked(this.digitalLock);
    }
  }
}

class Unlocked extends State {
  status = "unlocked";
  toggle(combination = "") {
    if (combination) {
      this.digitalLock.key = combination;
    }
    this.digitalLock.state = new Locked(this.digitalLock);
  }
}

export class DigitalLock {
  key;
  state;
  constructor(key = "") {
    this.key = key;
    this.state = new Locked(this);
  }

  toggle(combination = "") {
    this.state.toggle(combination);
  }
}
