export class SuccessButton {
  create() {
    return '<div class="button button__success">Button</div>'
  }
}

export class ErrorButton {
  create() {
    return '<div class="button button__error">Button</div>'
  }
}

export class SuccessNotification {
  create() {
    return '<div class="notify notify__success">Notification</div>'
  }
}

export class ErrorNotification {
  create() {
    return '<div class="notify notify__error">Notification</div>'
  }
}

export class SuccessControl {
  create (type = '') {
    if (type === 'notification')
      return new SuccessNotification()
    else
      return new SuccessButton()
  }
}

export class ErrorControl {
  create (type = '') {
    if (type === 'notification')
      return new ErrorNotification()
    else
      return new ErrorButton()
  }
}

export default class ControlsFactory {
  getFactory (factoryType = '') {
    if (factoryType === 'error')
      return new ErrorControl()
    else
      return new SuccessControl()
  }
}
