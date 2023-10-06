// SOAL = https://www.codewars.com/kata/64fbfe2618692c2018ebbddb
// by: as
// https://github.com/rhnas110

function flickSwitch(arr) {
  let flick = true;

  // cara ES6 map
  return arr.map((item) => (item === "flick" ? (flick = !flick) : flick));
  // akhir cara ES6 map

  // cara looping for let biasa
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") flick = !flick;
    res.push(flick);
  }
  return res;
  // akhir cara looping for let biasa
}

flickSwitch(["codewars", "flick", "code", "wars"]); // [true, false, false, false]
flickSwitch(["flick", "chocolate", "adventure", "sunshine"]); // [false, false, false, false]
flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]); // [true, true, false, false, true]
flickSwitch([["john", "smith", "susan"], "flick"]); // [true, false]
flickSwitch(["flick", "flick", "flick", "flick", "flick"]); // [false, true, false, true, false]
flickSwitch(["bicycle"]); // [true]
flickSwitch(["flick"]); // [false]
flickSwitch([]); // []
