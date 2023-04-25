// function betterThanAverage(classPoints, yourPoints) {
// hitung rata2
// let total = 0;
// for (let i = 0; i < classPoints.length; i++) {
//   total += classPoints[i];
// }
// bandingkan dengan nilai kita
// return yourPoints > total / classPoints.length;
// return classPoints.length * yourPoints > total;
// let total = 0;
// classPoints.forEach((el) => (total += el));
// return yourPoints > total / classPoints.length;

//   return yourPoints > classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length;
// }

const betterThanAverage = (classPoints, yourPoints) => yourPoints > classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length;

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
