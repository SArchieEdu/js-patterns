export class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  forEach (callback) {
    return this.getRange().forEach(x => callback(x))
  }

  getRange () {
    const rangeArr = []
    for (let i = this.start; i <= this.end; i++) {
      rangeArr.push(i)
    }
    return rangeArr
  }
}

