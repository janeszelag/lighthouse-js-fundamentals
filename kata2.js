
const conditionalSum = function(values, condition) {
  let newArray = [];
  if (condition === "even") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        newArray.push(values[i]);
      }
    }
    if (newArray.length === 0) {
      return 0;
    } else {
      let sum = newArray.reduce(function(a,b) {
        return a + b;
      })
      return sum;
    }
  }
  if (condition === "odd") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 !== 0) {
        newArray.push(values[i]);
      }
    }
    if (newArray.length === 0) {
      return 0;
    } else {
      let sum = newArray.reduce(function(a,b) {
        return a + b;
      })
      return sum;
    }
  }
}

console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
