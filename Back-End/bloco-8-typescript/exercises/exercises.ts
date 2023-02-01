export function getSquareArea(side: number): number {
  return side ** 2;
};

export function getRectangleArea(heigth: number, width: number): number {
  return heigth * width;
};

export function getTriangleArea(heigth: number, width: number): number {
  return (heigth * width) / 2;
};

export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, side) => acc + side, 0);
};

export function triangleCheck(sideA: number, sideB: number, sideC: number): boolean {
  const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
  const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
  const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
  return checkSideA && checkSideB && checkSideC;
}

export function getDiamondArea(sideLarger: number, sideSmaller: number): number {
  return (sideLarger * sideSmaller) / 2;
}