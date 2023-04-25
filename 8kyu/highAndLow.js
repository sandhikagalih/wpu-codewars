// function highAndLow(numbers) {
//   const numArr = numbers.split(' ');
//   return Math.max(...numArr) + ' ' + Math.min(...numArr);
// }

function highAndLow(numbers) {
  const numArr = numbers.split(' ');
  let max = parseInt(numArr[0]);
  let min = parseInt(numArr[0]);

  for (let i = 0; i < numArr.length; ++i) {
    if (parseInt(numArr[i]) > max) {
      max = parseInt(numArr[i]);
    }

    if (parseInt(numArr[i]) < min) {
      min = parseInt(numArr[i]);
    }
  }

  return max + ' ' + min;
}

console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'), '542 -214');
