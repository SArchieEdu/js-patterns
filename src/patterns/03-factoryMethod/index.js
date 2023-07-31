class Input {
  element = {};

  create () {
    // Abstract method
  }
}

export class TextInput extends Input {
  create() {
    this.element.type = "text";
    return this;
  }
}

export class NumberInput extends Input {
  create() {
    this.element.type = "number";
    return this;
  }
}

export class EmailInput extends Input {
  create() {
    this.element.type = "email";
    return this;
  }
}

export const inputFactory = (type = '') => {
  switch (type) {
    case "text":
      return new TextInput()
    case "number":
      return new NumberInput()
    case "email":
      return new EmailInput()
    default:
      throw new Error(`Input type should be one of "text", "number" or "email".`)
  }
};
