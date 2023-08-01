export class SuccessButton {}
export class ErrorButton {}
export class SuccessNotification {}
export class ErrorNotification {}

export class SuccessControl {
  create(type = "") {
    return {
      button: () => new SuccessButton(),
      notification: () => new SuccessNotification(),
    }[type]();
  }
}

export class ErrorControl {
  create(type = "") {
    return {
      button: () => new ErrorButton(),
      notification: () => new ErrorNotification(),
    }[type]();
  }
}

export default class ControlsFactory {
  getFactory(factoryType = "") {
    return {
      success: () => new SuccessControl(),
      error: () => new ErrorControl(),
    }[factoryType]();
  }
}
