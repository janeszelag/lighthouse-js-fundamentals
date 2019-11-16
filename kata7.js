
let camelCase = function(input) {
  let stringArray = input.split(' ');
  for (let i = 1; i < stringArray.length; i++) {
    stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
  }
  return stringArray.join('');
};
console.log(camelCase("this is a string and you guys are psychos"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

//other solution
let camelCase = function(input) {
  let newCamelCase = '';
  for (let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      i++;
      newCamelCase += input[i].toUpperCase();
      continue
      } 
    newCamelCase += input[i];
  } 
  return newCamelCase;
};