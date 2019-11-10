
let numbers = [1,2,3,4,3,6,7,3];

function lastIndexOf(array,value) {
  let x = array.length - 1;
  for (let i = x; i >= 0; i-- ) {
    if (value === array[i]) {
      return i;
    } 
    } 
    return -1;
  }
console.log(lastIndexOf([], 8));


function lastIndexOf (array, value) {
  let x = array.length - 1;
  for (let i = x; i >=0; i--) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1;
}