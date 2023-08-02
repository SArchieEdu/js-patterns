class Input {
  element = {};

  create() {}
}

export class TextInput extends Input {
  create() {
    super.create();
    this.element.type = "text";
    return this.element;
  }
}

export class NumberInput extends Input {
  create() {
    super.create();
    this.element.type = "number";
    return this.element;
  }
}

export class EmailInput extends Input {
  create() {
    super.create();
    this.element.type = "email";
    return this.element;
  }
}

export const inputFactory = (type = "") => {
  return {
    text: () => new TextInput(),
    number: () => new NumberInput(),
    email: () => new EmailInput(),
  }[type]();
};
