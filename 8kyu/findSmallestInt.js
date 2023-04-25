function findSmallestInt(args) {
  // cari bilangan terkecil dalam sebuah array

  // diurutkan dulu
  // return args.sort((a, b) => a - b)[0];

  // Math.min()
  return Math.min(...args);
}

console.log(findSmallestInt([78, 56, 232, 12, 8]), 8);
console.log(findSmallestInt([78, 56, 232, 12, 18]), 12);
console.log(findSmallestInt([78, 56, 232, 412, 228]), 56);
console.log(findSmallestInt([78, 56, 232, 12, 0]), 0);
console.log(findSmallestInt([1, 56, 232, 12, 8]), 1);
