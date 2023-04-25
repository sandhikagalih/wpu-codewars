function getMiddle(s) {
  if (s.length % 2 === 1) {
    return s.charAt(Math.ceil(s.length / 2) - 1);
  }
  return (
    s.charAt(Math.ceil(s.length / 2) - 1) +
    '' +
    s.charAt(Math.ceil(s.length / 2))
  );
}

console.log(getMiddle('test'), 'es');
console.log(getMiddle('testing'), 't');
console.log(getMiddle('middle'), 'dd');
console.log(getMiddle('A'), 'A');
