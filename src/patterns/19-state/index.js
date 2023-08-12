// todo: make refactoring, use State pattern
class OldDigitalLock {
  state = {
    status: "locked",
    key: ""
  };

  constructor(key = '') {
    this.state.key = key;
  }

  toggle (combination = '') {
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

class Locked {
  constructor(key, lock) {
    this.status = 'locked';
    this.lock = lock;
    this.key = key;
  }

  toggle (combination = '') {
    if (combination === this.key) {
      this.lock.state = new Unlocked(this.lock);
    }
  }
}

class Unlocked {
  constructor(lock) {
    this.status = 'unlocked';
    this.lock = lock;
}

  toggle (combination = '') {
    this.lock.state = new Locked(combination, this.lock);
  }
}

export class DigitalLock {
  constructor(key = "") {
    this.state = new Locked(key, this);
  }

  toggle (combination = '') {
    this.state.toggle(combination);
  }
}
