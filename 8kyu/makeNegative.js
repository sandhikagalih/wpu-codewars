function makeNegative(num) {
  // if (num > 0) {
  //   return -num;
  // } else {
  //   return num;
  // }

  // ternary
  // return num > 0 ? -num : num;

  // Math.abs
  return -Math.abs(num);
}

console.log(makeNegative(42), -42);
