class Handler {
  name = "";
  regExp = /./;
  currentHandler = null;
  nextHandler = null;

  constructor() {
    this.currentHandler = this;
  }

  setNext(handler) {
    this.nextHandler = handler;
    return this.nextHandler;
  }

  next(data) {
    this.currentHandler = this.currentHandler.nextHandler;
    return data;
  }

  validate(data) {
    let result;
    if (!data.match(this.currentHandler.regExp)) {
      result = `Validation rule "${this.currentHandler.name}" didn\'t pass for string "${data}"`;
    }
    return this.next(result);
  }
}

class MinLengthHandler extends Handler {
  name = "min-length";
  regExp = /.{5}/;
}

class NumbersHandler extends Handler {
  name = "numbers";
  regExp = /[0-9]/;
}

class LettersHandler extends Handler {
  name = "letter";
  regExp = /[a-z]/i;
}

class CapitalLettersHandler extends Handler {
  name = "capital-letters";
  regExp = /[A-Z]/;
}

class SpecialCharsHandler extends Handler {
  name = "special-chars";
  regExp = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
}

const chainOfResponsibility = new MinLengthHandler();

chainOfResponsibility
  .setNext(new NumbersHandler())
  /*   .setNext(new LettersHandler()) */
  .setNext(new CapitalLettersHandler())
  .setNext(new CapitalLettersHandler())
  .setNext(new SpecialCharsHandler());

export default chainOfResponsibility;
