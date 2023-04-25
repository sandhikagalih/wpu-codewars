function getCount(str) {
  var vowelsCount = 0;
  const vowels = ['a', 'i', 'u', 'e', 'o'];

  // enter your majic here
  for (let i = 0; i < str.length; ++i) {
    // if (
    //   str[i] === 'a' ||
    //   str[i] === 'i' ||
    //   str[i] === 'u' ||
    //   str[i] === 'e' ||
    //   str[i] === 'o'
    // )
    if (vowels.includes(str[i])) vowelsCount++;
  }

  return vowelsCount;
}

console.log(getCount('abracadabra'), 5);
