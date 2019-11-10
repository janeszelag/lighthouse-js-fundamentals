function range(start, end, step) {
  let countUp = [];
  if (start === undefined || end === undefined || step === undefined) {
    return countUp;
  } else if (start > end) {
    return countUp;
  } else if (step <= 0) {
    return countUp;
  } else {
    for (let i = start; i <= end; i += step) {
      countUp.push(i);
    }
    return countUp; 
  }
}
console.log(range(5, 40, 5));