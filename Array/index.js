//Reducing
let sum = [1, 2, 3, 4].reduce(function (a, b) {
  console.log(a, b);
  return a + b;
});
console.log(sum);
//Flatten Array of Objects
var Flatten = [
  {
    key: "one",
    value: 1,
  },
  {
    key: "two",
    value: 2,
  },
  {
    key: "three",
    value: 3,
  },
];
//old-Method
let oldFlatten = Flatten.reduce(
  (obj, current) =>
    Object.assign(obj, {
      [current.key]: current.value,
    }),
  {}
);
console.log(oldFlatten);

//es6 method
let newFlatten = Flatten.reduce(
  (obj, current) => ({ ...obj, [current.key]: current.value }),
  {}
);
console.log(newFlatten);
