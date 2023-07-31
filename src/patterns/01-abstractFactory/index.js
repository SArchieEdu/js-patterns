export class SuccessButton {}
export class ErrorButton {}
export class SuccessNotification {}
export class ErrorNotification {}

export class SuccessControl {
  create (type = '') {
    switch (type) {
      case "button":
        return new SuccessButton()
      case "notification":
        return new SuccessNotification()
      default:
        throw new Error(`SuccessControl type should either be "button" or "notification".`)
    }
  }
}

export class ErrorControl {
  create (type = '') {
    switch (type) {
      case "button":
        return new ErrorButton()
      case "notification":
        return new ErrorNotification()
      default:
        throw new Error(`ErrorControl type should either be "button" or "notification".`)
    }
  }
}

export default class ControlsFactory {
  getFactory (factoryType = '') {
    switch (factoryType) {
      case "success":
        return new SuccessControl()
      case "error":
        return new ErrorControl()
      default:
        throw new Error(`Factory type should either be "success" or "error".`)
    }
  }
}
