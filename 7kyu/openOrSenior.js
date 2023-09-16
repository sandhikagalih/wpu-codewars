// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

// function openOrSenior(data) {
//   return data.map(([age, handicap]) => (age >= 55 && handicap > 7 ? 'Senior' : 'Open'));
// }

const openOrSenior = (data) => data.map(([age, handicap]) => (age >= 55 && handicap > 7 ? 'Senior' : 'Open'));

// function openOrSenior(data) {
//   const hasil = [];

//   for (let i = 0; i < data.length; i++) {
//     if (data[i][0] >= 55 && data[i][1] > 7) {
//       hasil.push('Senior');
//     } else {
//       hasil.push('Open');
//     }
//   }

//   return hasil;
// }

// const openOrSenior = (data) => data.reduce((prev, [age, handicap]) => (age >= 55 && handicap > 7 ? [...prev, 'Senior'] : [...prev, 'Open']), []);

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
