let talkingCalendar = function(date) {
  let dateArray = date.split("/");
  let month = dateArray[1];
  let newMonth = "";
  switch (month) {
    case "01":
      newMonth = "January ";
      break;
    case "02":
      newMonth = "February ";
      break;
    case "03":
      newMonth = "March ";
      break;
    case "04":
      newMonth = "April ";
      break;
    case "05":
      newMonth = "May ";
      break;
    case "06":
      newMonth = "June ";
      break;
    case "07":
      newMonth = "July ";
      break;
    case "08":
      newMonth = "August ";
      break;
    case "09": 
      newMonth = "September ";
      break;
    case "10":
      newMonth = "October ";
      break;
    case "11":
      newMonth = "November ";
      break;
    case "12":
      newMonth = "December ";
      break;
  }
  let ending = ""
  if (dateArray[2] === "01" || dateArray[2] === "21" || dateArray[2] === "31") {
    ending = "st, ";
  } else if (dateArray[2] === "02" || dateArray[2] === "22") {
    ending = "nd, ";
  } else if (dateArray[2] === "03" || dateArray[2] === "23") {
    ending = "rd, ";
  } else {
    ending = "th, "
  }
if (dateArray[2][0] === "0") {
  return newMonth + dateArray[2][1] + ending + dateArray[0];
} else {
  return newMonth + dateArray[2] + ending + dateArray[0];
}
};
console.log(talkingCalendar("2017/01/01"));
console.log(talkingCalendar("2007/06/11"));
console.log(talkingCalendar("1987/08/04"));