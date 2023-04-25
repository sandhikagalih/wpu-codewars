function past(h, m, s) {
  return (3600 * h + 60 * m + s) * 1000;
}

console.log(past(0, 1, 1), 61000);
console.log(past(1, 1, 1), 3661000);
console.log(past(0, 0, 0), 0);
console.log(past(1, 0, 1), 3601000);
console.log(past(1, 0, 0), 3600000);
