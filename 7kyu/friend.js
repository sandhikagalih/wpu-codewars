// https://www.codewars.com/kata/55b42574ff091733d900002f

function friend(friends) {
  // let newFriends = [];
  // for (let i = 0; i < friends.length; i++) {
  //   if (friends[i].length === 4) {
  //     newFriends.push(friends[i]);
  //   }
  // }
  // return newFriends;
  // let newFriends = [];
  // friends.forEach((friend) => {
  //   if (friend.length === 4) {
  //     newFriends.push(friend);
  //   }
  // });
  // return newFriends;
  return friends.filter((friend) => friend.length === 4);
  // return friends.reduce((p, c) => (c.length === 4 ? [...p, c] : p), []);
  // Higher-order function
  // map, filter, reduce
}

console.log(friend(['Ryan', 'Kieran', 'Mark']));
