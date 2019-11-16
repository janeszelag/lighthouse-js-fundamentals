const multiplicationTable = function(maxValue) {
  newString = ''
  for (let i = 1; i <= maxValue; i++ ) {
    for (let y = 1; y <= maxValue; y++) {
      newString += i * y;
      newString += ' '; 
    }
    if (i < maxValue) {
      newString += '\n'
    }
  }
  return newString;
};

console.log(multiplicationTable(0));
