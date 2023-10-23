
const createBase = baseNumber => num => baseNumber + num;
var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));
