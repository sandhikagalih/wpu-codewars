// SOAL = https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
// by: as
// https://github.com/rhnas110

function multiTable(number) {
  // cara biasa pakai looping
  let res = "";

  for (let i = 1; i <= 10; i++)
    i === 10
      ? (res += `${i} * ${number} = ${i * number}`)
      : (res += `${i} * ${number} = ${i * number}\n`);

//  return res;
  // akhir cara biasa pakai looping

  // cara puh sepuh ajarin dong puhhh
  return `1 * ${number} = ${1 * number}
2 * ${number} = ${2 * number}
3 * ${number} = ${3 * number}
4 * ${number} = ${4 * number}
5 * ${number} = ${5 * number}
6 * ${number} = ${6 * number}
7 * ${number} = ${7 * number}
8 * ${number} = ${8 * number}
9 * ${number} = ${9 * number}
10 * ${number} = ${10 * number}`;
  // akhir cara puh sepuh ajarin dong puhhh
}

multiTable(5); // "1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50";
multiTable(1); // "1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10";
