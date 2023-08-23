export class Visitor {
  constructor(compositeItem) {
    this.compositeItem = compositeItem;
    this.init();
  }

  init () {
    this.addGetSize();

    this.compositeItem.children.forEach((child) => {
      child.accept(Visitor);
    });
  }

  addGetSize() {
    this.compositeItem.getSize = () => {
      const countOfOwnComment = 1;
      return this.compositeItem.children.reduce(
          (acc, child) => acc + child.getSize(),
          countOfOwnComment
      );
    };
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
