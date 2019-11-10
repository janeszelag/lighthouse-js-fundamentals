let numberOfVowels = function(data) {
  const newArray = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
      newArray.push(data[i]);
    }
  }
  return newArray.length;
};
console.log(numberOfVowels("why"));