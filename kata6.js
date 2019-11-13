 let repeatNumbers = function(data) {
  let newString = ""
  for (let row = 0; row < 1; row++) {
    for (let i = 0; i < data[0][1]; i++) {
      newString += data[0][0];
    }
  }
  
  for (let row = 1; row < data.length; row++) {
    newString += ", "
    for (let y = 0; y < data[row][1]; y++) {
      newString += data[row][0];
    }
  }
  return newString;
};
console.log(repeatNumbers([[1, 9]]));