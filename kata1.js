let numArray = [5,300,29,7,10,22];
function sumLargestNumbers(array) {
  array = array.sort(function(a,b) {
    return a - b;
  })
let x = array.length -1;
let y = array.length -2;
sum = array[x] + array[y];
return sum; 
}
console.log(sumLargestNumbers(numArray));