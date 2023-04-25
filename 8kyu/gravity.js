const flip = (d, a) => {
  if (d === 'R') {
    return a.sort(function (a, b) {
      return a - b;
    });
  }
  return a.sort().reverse();
};

console.log(flip('R', [13, 2, 4, 7, 93]));
