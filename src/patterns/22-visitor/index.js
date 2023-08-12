export class Visitor {
  constructor(compositeItem) {
    this.compositeItem = compositeItem;
    this.init();
  }

  init () {
    this.addGetSize();

    // Непонятно какая дополнительная логика должна быть добавлена
    // todo: add implementation
  }

  addGetSize () {
    this.compositeItem.getSize = () => {
      return this.compositeItem.children.reduce((acc, child) => {
        child.accept(Visitor);
        return acc + child.getSize();
      }, 1);
    }
  }
}

export class Comment {
  constructor({
    id = '',
    content = '',
    children = []
  } = {}) {
    this.id = id;
    this.content = content;
    this.children = children;
  }

  accept (Visitor) {
    new Visitor(this);
  }
}
