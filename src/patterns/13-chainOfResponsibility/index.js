class Handler {
  name = "";
  regExp = /./;
  nextHandler = null;

  setNext(handler) {
    this.nextHandler = handler;
    return this.nextHandler;
  }

  next(data) {
    if (this.nextHandler) {
      return this.nextHandler.validate(data);
    }
  }

  validate(data) {
    if (!data.match(this.regExp)) {
      return `Validation rule "${this.name}" didn\'t pass for string "${data}"`;
    }

    return this.next(data);
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
  .setNext(new LettersHandler())
  .setNext(new CapitalLettersHandler())
  .setNext(new SpecialCharsHandler());

export default chainOfResponsibility;
