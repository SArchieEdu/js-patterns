export class NextPage {
  constructor(pagination) {
    this.pagination = pagination;
  }

  execute () {
    this.pagination.nextPage();
  }
}

export class PrevPage {
  constructor(pagination) {
    this.pagination = pagination;
  }

  execute () {
    this.pagination.prevPage();
  }
}

export class Pagination {
  currentPage = 1;

  nextPage () {
    return this.currentPage += 1;
  }

  prevPage () {
    return this.currentPage -= 1;
  }
}

export class Button {
  constructor (command) {
    this.onClick = command;
  }

  click () {
    this.onClick.execute();
  }
}
