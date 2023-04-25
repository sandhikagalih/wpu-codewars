function sum(numbers) {
  // barbar mode
  // let hasil = 0;
  // if (!numbers.length) return 0;

  // for (let i = 0; i < numbers.length; i++) {
  //   hasil += numbers[i];
  // }

  // return hasil;

  // return numbers.reduce((acc, curr) => acc + curr, 0);
  return eval(numbers.join('+')) ?? 0;
}

function sum(numbers) {
  let hasil = 0;
  if (!numbers.length) return 0;
  for (let i = 0; i < numbers.length; i++) {
    hasil += numbers[i];
  }
  return hasil;
}

const sum = (n) => n.reduce((acc, curr) => acc + curr, 0);
console.log(sum([1, 2, 3, 4, 5, 6]));
