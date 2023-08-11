export class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  forEach (callback) {
    for(let i = this.start; i <= this.end; i++) {
      callback(i);
    }
  }

  getRange () {
    const array = [];
    this.forEach((number) => {
      array.push(number);
    })

    return array;
  }
}

