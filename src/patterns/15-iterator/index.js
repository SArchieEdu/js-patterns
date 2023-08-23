export class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  forEach (callback) {
    for(let i = this.start; i <= this.end;i++){
      callback(i);
    }
  }

  getRange () {
    let range = [];
    this.forEach((item) => {
      range.push(item);
    });
    return range
  }
}

