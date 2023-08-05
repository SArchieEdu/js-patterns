export const getArea = (shape) => {
  return shape.width * shape.height;
};

export class Square {
  constructor(size) {
    this.size = size;
  }
}

export class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

export class Adapter {
  constructor(shape) {
    this.width = shape.size;
    this.height = shape.size;
  }
}
