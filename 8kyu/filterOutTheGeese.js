// SOAL = https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
// by: as
// https://github.com/rhnas110

function gooseFilter(birds) {
  const GEESE = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];

  // cara filter biasa
//  return birds.filter((bird) => !GEESE.includes(bird));
  // akhir cara filter biasa

  // cara reduce terinspirasi dari sepuh Mednoob
  return birds.reduce(
    (e, bird) => (GEESE.includes(bird) ? e : [...e, bird]),
    []
  );
  // akhir cara reduce terinspirasi dari sepuh Mednoob
}

gooseFilter([
  "Mallard",
  "Hook Bill",
  "African",
  "Crested",
  "Pilgrim",
  "Toulouse",
  "Blue Swedish",
]); // ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]); // ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]); // []
