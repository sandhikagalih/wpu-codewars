function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0;

  // if (number % a == 0 && number % b == 0) {
  //   return true;
  // }

  // return false;
}

console.log(isDivideBy(-12, 2, -6), true);
console.log(isDivideBy(-12, 2, -5), false);
console.log(isDivideBy(45, 1, 6), false);
console.log(isDivideBy(45, 5, 15), true);
console.log(isDivideBy(4, 1, 4), true);
console.log(isDivideBy(15, -5, 3), true);
