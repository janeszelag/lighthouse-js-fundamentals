function calculateRectangleArea(length, width) {
  let areaRectangle = length * width;
  if (Math.sign(length) === -1 || Math.sign(width) === -1)  {
    areaRectangle = undefined;
  } 
  return areaRectangle;
}
console.log(calculateRectangleArea(-1, 0)); 

function calculateTriangleArea(base, height) {
  let areaTriangle = base * height / 2;
  if (Math.sign(base) === -1 || Math.sign(height) === -1) {
    areaTriangle = undefined;
  }
  return areaTriangle;
}
console.log(calculateTriangleArea(-1, 0)); 

function calculateCircleArea(radius) {
  let areaCircle = radius * radius * Math.PI;
  if (Math.sign(radius) === -1) {
    areaCircle = undefined;
  }
  return areaCircle;
}
console.log(calculateCircleArea(-1));