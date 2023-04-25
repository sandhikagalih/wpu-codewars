// function removeChar(str) {
// menghilangkan karakter pertama dan terakhir dari sebuah string
// return str.slice(1, -1);
// return str.substring(1, str.length - 1);
// ubah str jadi array
// const arrStr = str.split('');
// arrStr.shift();
// arrStr.pop();
// ubah array jadi string
// return arrStr.join('');
// }

// arrow function
const removeChar = (str) => str.slice(1, -1);

console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');
