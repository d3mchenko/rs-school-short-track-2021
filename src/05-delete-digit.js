/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = n.toString().split('');
  for (let i = 0; i < number.length; i++) {
    number[i] = +number[i];
  }
  let min = number[0];
  let index = 0;
  for (let i = 1; i < number.length; i++) {
    if (number[i] < min) {
      min = number[i];
      index = i;
    }
  }
  number.splice(index, 1);
  number = +number.join('');
  return number;
}

module.exports = deleteDigit;
