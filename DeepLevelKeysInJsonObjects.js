function countDeepLevelKeys(obj) {
  let count = 0;
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      count += countDeepLevelKeys(obj[key]) + 1;
    }
  }
  return count;
}

// This program will take an object as an input and return a numeric count of deep level occurences in an object

/* const obj = {
  a: {
    b: {
      c: 1
    }
  }
};
*/

// console.log(countDeepLevelKeys(obj)); // 1
