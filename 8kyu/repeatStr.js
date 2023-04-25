function repeatStr(n, s) {
  // cetak s sebanyak n kali
  // str = '';
  // for (i = 0; i < n; i++) {
  //   str += s;
  // }
  // return str;
  return s.repeat(n);
}

console.log(repeatStr(3, '*'), '***');
console.log(repeatStr(5, '#'), '#####');
console.log(repeatStr(2, 'ha '), 'ha ha ');
