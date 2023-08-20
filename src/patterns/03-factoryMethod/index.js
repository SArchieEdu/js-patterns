class Input {
  element = {};

  create() {
    return this.element;
  }
}

export class TextInput extends Input {
  create() {
    this.element.type = "text";
    super.create();
  }
}

export class NumberInput extends Input {
  create() {
    this.element.type = "number";
    super.create();
  }
}

export class EmailInput extends Input {
  create() {
    this.element.type = "email";
    super.create();
  }
}

export const inputFactory = (type = "") => {
  const inputs = {
    text: TextInput,
    number: NumberInput,
    email: EmailInput,
  };

  const Input = inputs[type];
  return new Input();
};
