export class Visitor {
  constructor(compositeItem) {
    this.compositeItem = compositeItem;
    this.init();
  }

  init () {
    this.addGetSize();

    // I don't like that this class is now loosely coupled to Comment's implementation.
    this.compositeItem.children.forEach(child => child.accept(Visitor));
  }

  addGetSize () {
    // Why not simply call this once?
    // Comment.prototype.getSize = function() {
    //   return 1 + this.children.reduce((sum, child) => sum + child.getSize(), 0);
    // }
    this.compositeItem.getSize = function() {
      return 1 + this.children.reduce((sum, child) => sum + child.getSize(), 0);
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

  // What's the point in making this param look like a class name?
  // I guess we could as well rename it to `klass` or `visitor` or something.
  accept (Visitor) {
    new Visitor(this);
  }
}
