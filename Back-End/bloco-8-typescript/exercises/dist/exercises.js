"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCircleArea = exports.getTrapezeArea = exports.getDiamondArea = exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
;
function getRectangleArea(heigth, width) {
    return heigth * width;
}
exports.getRectangleArea = getRectangleArea;
;
function getTriangleArea(heigth, width) {
    return (heigth * width) / 2;
}
exports.getTriangleArea = getTriangleArea;
;
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, side) => acc + side, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
;
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
function getDiamondArea(sideLarger, sideSmaller) {
    return (sideLarger * sideSmaller) / 2;
}
exports.getDiamondArea = getDiamondArea;
function getTrapezeArea(Blarger, bSmaller, heigth) {
    return ((Blarger + bSmaller) * heigth) / 2;
}
exports.getTrapezeArea = getTrapezeArea;
function getCircleArea(r) {
    return Math.PI * (r ** 2);
}
exports.getCircleArea = getCircleArea;
