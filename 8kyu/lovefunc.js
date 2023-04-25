function lovefunc(flower1, flower2) {
  // barbar
  // if (flower1 % 2 === 1 && flower2 % 2 === 0) {
  //   return true;
  // } else if (flower1 % 2 === 0 && flower2 % 2 === 1) {
  //   return true;
  // } else {
  //   return false;
  // }

  // cara singkat
  // return flower1 % 2 !== flower2 % 2;

  // cara lain
  return (flower1 + flower2) % 2 === 1 ? true : false;
}

console.log(lovefunc(2, 2));
