function positiveSum(arr) {
  // menjumlahkan seluruh elemen array yang positif
  // let total = 0;
  // for (i = 0; i < arr.length; i++) {
  //   if (arr[i] > 0) {
  //     total += arr[i];
  //   }
  // }
  // return total;
  // foreach
  // let total = 0;
  // arr.forEach((a) => {
  //   if (a > 0) {
  //     total += a;
  //   }
  // });
  // return total;
  // filter
  // let total = 0;
  // arr.filter((a) => a > 0).forEach((a) => (total += a));
  // return total;
  // reduce
  // return arr.filter((a) => a > 0).reduce((total, a) => total + a, 0);
  // ajaib
  return arr.reduce((total, a) => total + (a > 0 ? a : 0), 0);
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);
