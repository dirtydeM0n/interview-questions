function hasTruthyValues(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'object' && !Object.keys(obj[key]).length) {
      return false;
    }
    if (obj[key] && typeof obj[key] === 'object') {
      if (hasTruthyValues(obj[key])) {
        return true;
      }
    } else if (obj[key]) {
      return true;
    }
  }
  return false;
}

/*
const obj1 = {
  a: 1,
  b: {
    c: '',
    d: false
  }
};

const obj2 = {
  a: 1,
  b: {
    c: {
      d: null
    }
  }
};

const obj3 = {
  a: 1,
  b: {
    c: {
      d: 2
    }
  }
};
*/
console.log(hasTruthyValues(obj1)); // true
console.log(hasTruthyValues(obj2)); // false
console.log(hasTruthyValues(obj3)); // true
