const instructorWithLongestName = function(instructors) {
    instructors.sort(function(a,b) {
      return b.name.length - a.name.length;
    })
    return instructors[0];
  }
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));