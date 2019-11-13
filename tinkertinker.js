kataArray = [
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
];
kataArray.sort(function(a,b) {
  return b.name.length - a.name.length;
})
console.log(kataArray);