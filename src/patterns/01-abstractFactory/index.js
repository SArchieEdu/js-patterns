export class SuccessButton {}
export class ErrorButton {}
export class SuccessNotification {}
export class ErrorNotification {}

class Control {
  types = {};

  create(type = "") {
    const ControlType = this.types[type];
    if (!ControlType) {
      throw new Error("Control type is not defined");
    }
    return new ControlType();
  }
}

export class SuccessControl extends Control {
  constructor() {
    super();
    this.types.button = SuccessButton;
    this.types.notification = SuccessNotification;
  }
}

export class ErrorControl extends Control {
  constructor() {
    super();
    this.types.button = ErrorButton;
    this.types.notification = ErrorNotification;
  }
}

export default class ControlsFactory {
  getFactory(factoryType = "") {
    if (factoryType === "success") {
      return new SuccessControl();
    }
    if (factoryType === "error") {
      return new ErrorControl();
    }
  }
}
