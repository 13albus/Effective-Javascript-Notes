// Below two lines represents valid ways to declare an array
var a = [1, 2, 3, 4, 5];
// var a = new Array(1, 2, 3, 4, 5);

function f(Array) {
  return new Array(1, 2, 3, 4, 5);
}

console.log(f(String)); // out => [String: '1']
// String replaces Array here

// You also have to be sure that no one has modified the global Array variable

const Array = String;

console.log(Array(1, 2, 3, 4, 5)); // out => 1

/**
 * We must also not that Array constructor behaves differently when only one argument is provided
 * For example:
 *          console.log(new Array(10)); // out => [ <10 empty items> ]
 */

/**
 * Things to remember
 *          - The Array constructor behaves differently if its first argument is a number.
 *          - Use array literals instead of the Array constructor.
 */
