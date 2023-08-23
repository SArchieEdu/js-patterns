export class NextPage {
  constructor(paginationService) {
    this.paginationService = paginationService;
  }
  execute () {
    this.paginationService.nextPage();
  }
}

export class PrevPage {
  constructor(paginationService) {
    this.paginationService = paginationService;
  }
  execute () {
    this.paginationService.prevPage();
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
    this.command = command;
  }

  click () {
    this.command.execute();
  }
}
