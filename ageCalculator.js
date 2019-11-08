function ageCalculator(name, yearOfBirth, currentYear) {
  var calculation = currentYear - yearOfBirth;
  return name + " is " + calculation + " years old."
}
console.log(ageCalculator("Miranda", 1983, 2015));