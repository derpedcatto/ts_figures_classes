enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Colors {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

export interface Figure {
  shape: Shapes;
  color: Colors;

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shapes = Shapes.triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive numbers');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'Invalid triangle: sides do not satisfy triangle inequality',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shapes = Shapes.circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = Shapes.rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
