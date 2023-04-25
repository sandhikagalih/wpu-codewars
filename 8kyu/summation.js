var summation = function (num) {
  // jumlahkan seluruh angka dari 1 sampai num
  // let total = 0;
  // for (i = 1; i <= num; i++) {
  //   total = total + i;
  // }
  // return total;

  // let total = 0;
  // for (i = 1; i <= num; i++) {
  //   // total = total + i;
  //   total += i;
  // }
  // return total;
  return (num * (num + 1)) / 2;
  // KuKaBaTaKu = Kurung Kali Bagi Tambah Kurang
  // return 2 * (3) / 2;
};

console.log(summation(2), 3);
console.log(summation(8), 36);
