class Locked {
  status = 'locked'

  constructor(key) {
    this.key = key
  }

  toggle(key = "") {
    if (key === this.key) {
      return new Unlocked()
    }
  }
}

class Unlocked {
  status = 'unlocked'

  toggle(key = "") {
    if (key) {
      return new Locked(key)
    }
  }
}

export class DigitalLock {
  constructor(key = "") {
    this.state = new Locked(key)
  }

  toggle (key = '') {
    const newState = this.state.toggle(key)
    this.state = newState ? newState : new Locked(key)
  }
}
