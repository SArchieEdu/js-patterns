class Page {
  constructor(pagination) {
    this.pagination = pagination;
  }
}

export class NextPage extends Page {
  execute() {
    this.pagination.nextPage();
  }
}

export class PrevPage extends Page {
  execute() {
    this.pagination.prevPage();
  }
}

export class Pagination {
  currentPage = 1;

  nextPage() {
    return (this.currentPage += 1);
  }

  prevPage() {
    return (this.currentPage -= 1);
  }
}

export class Button {
  constructor(command) {
    this.command = command;
  }

  click() {
    this.command.execute();
  }
}
