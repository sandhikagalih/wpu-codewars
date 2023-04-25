// https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b/train/javascript
function sakuraFall(v) {
  if (v < 0) {
    return 0;
  }
  const jarakKeTanah = 5 * 80;
  return jarakKeTanah / v;
}

console.log(sakuraFall(0));
