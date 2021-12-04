/*
// Object.prototype.allKeys = function () {
//   var result = [];
//   for (var key in this) {
//     result.push(key);
//   }
//   return result;
// };

// console.log({ a: 1, b: 2, c: 3 }.allKeys()); // ["allKeys", "a", "b", "c"] 
// prototype pollution is the problem
*/

// write a function instead

/*
// function allKeys(obj) {
//   var result = [];
//   for (var key in obj) {
//     result.push(key);
//   }
//   return result;
// }
*/

// A slightly verbose but good Solution

Object.defineProperty(Object.prototype, "allKeys", {
  value: function () {
    var result = [];
    for (var key in this) {
      result.push(key);
    }
    return result;
  },
  writable: true,
  enumerable: false,
  configurable: true,
});
