// function fakeBin(x) {
// let result = '';
// // ubah string jadi array
// const xSplit = x.split('');
// // looping dan telusuri setiap elemen nya
// for (let i = 0; i < xSplit.length; i++) {
//   // cek masing-masing elemen
//   if (xSplit[i] < 5) {
//     // isi result sesuai kondisi
//     result += '0';
//   } else {
//     result += '1';
//   }
// }
// // kembalikan menjadi string
// return result;

// ubah string jadi array
// const xSplit = x.split('');
// // looping dan telusuri setiap elemen nya
// for (let i = 0; i < xSplit.length; i++) {
//   // cek masing-masing elemen
//   if (xSplit[i] < 5) {
//     // isi result sesuai kondisi
//     xSplit[i] = '0';
//   } else {
//     xSplit[i] = '1';
//   }
// }

// // kembalikan menjadi string
// return xSplit.join('');

//   return x
//     .split('')
//     .map((el) => (el < 5 ? '0' : '1'))
//     .join('');
// }

// const fakeBin = (x) => x.split('').map((el) => (el < 5 ? '0' : '1')).join('');

// const fakeBin = (x) => x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1');

const fakeBin = (x) => x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));

console.log(fakeBin('45835593107843568'));
