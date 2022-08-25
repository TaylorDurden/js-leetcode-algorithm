const instanceOf = (type, baseType) => {
  let p = type;
  while(p) {
    if(p === baseType.prototype) {
      return true;
    }

    p = p.__proto__;
  }
  return false;
}

console.log(instanceOf(1, Number)); // true
console.log(instanceOf({}, Object)); // true
console.log(instanceOf([], Array)); // true
console.log(instanceOf([], Object)); // true
console.log(instanceOf(() => {}, Function)); // true
console.log(instanceOf(() => {}, Object)); // true
console.log(instanceOf(1, Object)); // true
console.log(instanceOf(1, String)); // false