export function getSquareArea(side: number): number {
  return side ** 2;
};

export function getRectangleArea(heigth: number, width: number): number {
  return heigth * width;
};

export function getTriangleArea(heigth: number, width: number): number {
  return (heigth * width) / 2;
};