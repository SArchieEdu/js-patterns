export class SuccessButton {}
export class ErrorButton {}
export class SuccessNotification {}
export class ErrorNotification {}

export class SuccessControl {
  create (type = '') {
    if (type === 'button') {
      return new SuccessButton();
    }

    if (type === 'notification') {
      return new SuccessNotification();
    }
  }
}

export class ErrorControl {
  create (type = '') {
    if (type === 'button') {
      return new ErrorButton();
    }

    if (type === 'notification') {
      return new ErrorNotification();
    }
  }
}

export default class ControlsFactory {
  getFactory (factoryType = '') {
    if (factoryType === 'success') {
      return new SuccessControl();
    }

    if (factoryType === 'error') {
      return new ErrorControl();
    }
  }
}
