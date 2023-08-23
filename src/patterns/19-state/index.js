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
  status = 'locked';
  constructor(key) {
    this.key = key;
  }

  toggle(combination){
    if(combination === this.key) {
      return new Unlocked()
    }

    return this
  }
}

class Unlocked {
  status = 'unlocked';
  toggle(combination){
    if(combination) {
      return new Locked(combination)
    }

    return this
  }
}

export class DigitalLock {
  state;
  constructor(key = "") {
    this.state = new Locked(key);
  }

  toggle (combination = '') {
    this.state = this.state.toggle(combination);
  }
}
