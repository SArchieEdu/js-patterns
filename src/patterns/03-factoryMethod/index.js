import {ErrorControl, SuccessControl} from "../01-abstractFactory";

class Input {
  element = {};

  create() {
    // Abstract method
  }
}

export class TextInput extends Input {
  create() {
    return `text component`
  }
}

export class NumberInput extends Input {
  create() {
    return `number component`
  }
}

export class EmailInput extends Input {
  create() {
    return `email component`
  }
}

export const inputFactory = (type = '') => {
  switch (type){
    case 'text':
      return new TextInput()
    case 'number':
      return  new NumberInput()
    case 'email':
      return  new EmailInput()
    default: return null
  }
};
