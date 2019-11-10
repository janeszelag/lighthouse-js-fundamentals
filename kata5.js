const urlEncode = function(text) {
  let newString = text.trim();
  let string2 = ''
  for (i = 0; i < newString.length; i++) {
    if (newString[i] !== ' ') {
      string2 += newString[i];
    } else {
      if (newString[i] === ' ') {
        string2 += '%20'
      }
    }
  }
  return string2; 
};

console.log(urlEncode("blue is greener than purple for sure"));