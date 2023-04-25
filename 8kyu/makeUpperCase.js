function makeUpperCase(str) {
  // return str
  //   .split('')
  //   .map((huruf) => (huruf.charCodeAt() >= 97 && huruf.charCodeAt() <= 122 ? String.fromCharCode(huruf.charCodeAt() - 32) : huruf))
  //   .join('');
  return str.toUpperCase();
}

console.log(makeUpperCase('Sandhika'));
