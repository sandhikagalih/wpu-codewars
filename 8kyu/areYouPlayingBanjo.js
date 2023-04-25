// function areYouPlayingBanjo(name) {
// if (name.charAt(0) === 'R' || name.charAt(0) === 'r') {
//   return name + ' plays banjo';
// } else {
//   return name + ' does not play banjo';
// }

// if (name.charAt(0).toLowerCase() === 'r') {
//   return name + ' plays banjo';
// } else {
//   return name + ' does not play banjo';
// }

//   return name.charAt(0).toLowerCase() === 'r' ? name + ' plays banjo' : name + ' does not play banjo';
// }

const areYouPlayingBanjo = (name) => (name[0].toLowerCase() === 'r' ? name + ' plays banjo' : name + ' does not play banjo');

console.log(areYouPlayingBanjo('Ralf'));
