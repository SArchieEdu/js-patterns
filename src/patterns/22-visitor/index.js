export class Visitor {
  constructor(compositeItem) {
    this.compositeItem = compositeItem
    this.init()
  }

  init () {
    this.addGetSize()
    this.compositeItem.children.forEach(child => child.accept(Visitor))
  }

  addGetSize () {
    this.compositeItem.getSize = () => {
      return 1 + this.compositeItem.children.reduce((sum, child) => sum + child.getSize(), 0)
    }
  }
}

export class Comment {
  constructor({
    id = '',
    content = '',
    children = []
  } = {}) {
    this.id = id
    this.content = content
    this.children = children
  }

  accept (Visitor) {
    new Visitor(this)
  }
}
