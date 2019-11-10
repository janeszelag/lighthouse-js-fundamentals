let numbers = [1,2,3,4];
let letters = ['a', 'b', 'c']

function concat(array1, array2) {
  let newArray = array1.concat(array2)
  return newArray;
}


console.log(concat(numbers, letters));