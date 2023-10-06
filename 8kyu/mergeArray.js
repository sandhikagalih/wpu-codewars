// SOAL = https://www.codewars.com/kata/573f5c61e7752709df0005d2
// by: as
// https://github.com/rhnas110

// merge, sorted two arrays and remove duplicate integers

function mergeArrays(a, b) {
  // cara Set constructor
  return [...new Set(a.concat(b))].sort((a, b) => a - b);
  // akhir cara Set constructor
}

mergeArrays([1, 3, 5], [2, 4, 6]); // [1, 2, 3, 4, 5, 6]
mergeArrays([2, 4, 8], [2, 4, 6]); // [2, 4, 6, 8]
