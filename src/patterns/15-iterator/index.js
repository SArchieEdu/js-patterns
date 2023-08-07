export class Range {
  #range = null;

  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.#range = Array.from(
      Array(end - start + 1),
      (_, index) => index + start
    );
  }

  forEach(callback) {
    return this.#range.forEach((item) => {
      callback(item);
    });
  }

  getRange() {
    return this.#range;
  }
}
