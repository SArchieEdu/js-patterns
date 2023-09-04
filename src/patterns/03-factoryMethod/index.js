class Input {
  element = {};

  create () {
    // Abstract method
  }
}

export class TextInput extends Input {
  static create() {
    return new TextInput();
  }
}

export class NumberInput extends Input {
  static create() {
    return new NumberInput();
  }
}

export class EmailInput extends Input {
  static create() {
    return new EmailInput();
  }
}

export const inputFactory = (type = '') => {
  const inputs = {
    text: TextInput,
    number: NumberInput,
    email: EmailInput,
  }
 
  return inputs[type].create();
};
