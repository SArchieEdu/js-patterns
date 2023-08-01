export class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  forEach (callback) {
    return this.getRange().forEach(n => callback(n));
  }

  getRange () {
    if (this.end < this.start) {
      throw new Error("Range's end param should be greater than the start param.");
    }

    const range = [];
    for (let i = this.start; i <= this.end; i++) {
      range.push(i);
    }
    return range;
  }
}

