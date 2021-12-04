/**
 * A for...in loop always enumerates the keys
 *      - in arrays, keys are the index values
 *      - keys are of type string.
 *
 */

var scores = [98, 74, 85, 77, 93, 100, 89];
var total = 0;
for (var score in scores) {
  // We are looping through the index value of scores array
  // But a lesser trained eyes would miss the detail that
  // "for in" loops through keys (i.e., index values)
  // rather than the array entries.

  total += score; // Remember index values are of type string
  // So we are looking at concatnation rather than addition.
}
console.log(total); // "00123456"
var mean = total / scores.length;
console.log(mean); // 17636.571428571428

/**
 * Things to Remember
 *        - Always use a for loop rather than a for...in loop
 *          for iterating over the indexed properties of an array.
 *
 *        - Consider storing the length property of an array in a local
 *          variable before a loop to avoid recomputing the property lookup.
 */
