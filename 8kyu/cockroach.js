// SOAL = https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6
// by: as
// https://github.com/rhnas110

function cockroachSpeed(s) {
  const F = 27.7777777778; // cm/s in km/h.

  // cara pertama

//  return Math.floor(s * F);

  // akhir cara pertama

  // cara kok bisa
  return ~~(s * F);

  /* 
  penjelasan (~) = Bitwise NOT
  kalau (~~) simplenya sama seperti Math.floor untuk pembulatan kebawah
  */

  // akhir cara kok bisa
}

cockroachSpeed(1.08); // 30
cockroachSpeed(1.09); // 30
cockroachSpeed(0); // 0
