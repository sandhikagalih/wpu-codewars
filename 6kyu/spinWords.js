function spinWords(string) {
  // const temp = string.split(' ');
  // console.log(temp);
  // const result = [];

  // temp.forEach((el) => {
  //   if (el.length >= 5) {
  //     result.push(el.split('').reverse().join(''));
  //   } else {
  //     result.push(el);
  //   }
  // });

  // return result.join(' ');

  // return string
  //   .split(' ')
  //   .map((kata) => (kata.length >= 5 ? kata.split('').reverse().join('') : kata))
  //   .join(' ');
  // console.log(string);
  return string.replace(/\w{5,}/g, (kata) => [...kata].reverse().join(''));
}

console.log(spinWords('Hey fellow warriors'));
