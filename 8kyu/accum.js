// function accum(s) {
//   const str = s.split('');
//   const resultArr = [];
//   for (let i = 0; i < s.length; ++i) {
//     let result = '';
//     for (let j = 0; j <= i; ++j) {
//       if (j === 0) {
//         result += str[i].toUpperCase();
//       } else {
//         result += str[i].toLowerCase();
//       }
//     }
//     resultArr.push(result);
//   }
//   return resultArr.join('-');
// }

const accum = (s) => {
  return s
    .split('')
    .map((huruf, i) => huruf.toUpperCase() + huruf.toLowerCase().repeat(i))
    .join('-');
};

console.log(
  accum('ZpglnRxqenU'),
  'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'
);
console.log(
  accum('NyffsGeyylB'),
  'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb'
);
console.log(
  accum('MjtkuBovqrU'),
  'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu'
);
console.log(
  accum('EvidjUnokmM'),
  'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm'
);
console.log(
  accum('HbideVbxncC'),
  'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc'
);
