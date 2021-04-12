/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let index = 0;
  let j = array.length;
  let n;
  while (index < j) {
    n = Math.floor((j + index) / 2);
    if (array[n] >= value) j = n;
    else index = n + 1;
  }
  return index;
}

module.exports = findIndex;
